import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';
import Links from './Links';


export default function Search() {
  const [text, setText] = useState('Elon Musk');
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if(debounceValue) setSearchTerm(debounceValue);
  }
  , [debounceValue]);

  return (
    <div className='relative sm:ml-48  sm:mt-10 ' style={{marginTop:'-2.4rem'}}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}
       className='dark:bg-gray-800 w-96 sm:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-96 h-10 px-3 pr-10 border rounded-full text-sm focus:outline-none hover:shadow-lg'
        placeholder='Search' />
        {!text && (<button className='absolute top-1.5 right-4 text-2xl text-gray-500' onClick={() => setText('')}>X</button>)}
    <Links />
    </div>
  )
}
