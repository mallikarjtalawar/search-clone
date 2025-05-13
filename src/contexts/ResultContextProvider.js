import React from "react";
import { createContext, useContext, useState } from "react";


const ResultContext = createContext();
const baseurl = 'https://google-search72.p.rapidapi.com/';

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Elon musk');
    console.log("baseURL", baseurl);
    // console.log("type", type);
    const getResults = async (type) => {
        setIsLoading(true);
        console.log(`Requesting URL: ${baseurl}${type}`);

        const response = await fetch(`${baseurl}${type}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "face82c167mshd33382e6e40df7fp1c92adjsn408d032c03d4",
                "x-rapidapi-host": "google-search72.p.rapidapi.com"
            }
        });
        const data = await response.json();
        console.log(data);
        if(type.includes('news')) {
           console.log('News Data', data);
        }
        setResults(data);

        setIsLoading(false);


    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
        
}

export const useResultContext = () => {
    return useContext(ResultContext);
}