import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";
import ReactPlayer from "react-player";
export default function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        // getResults(`search?q=${searchTerm} videos`);
        getResults(`search?q=${encodeURIComponent(searchTerm)} videos`);
      } else if (location.pathname === "/images") {
        getResults(`imagesearch?q=${encodeURIComponent(searchTerm)}&tbm=isch`);
      } else {
        getResults(
          `${location.pathname.slice(1)}?q=${encodeURIComponent(searchTerm)}`
        );

        // getResults(`${location.pathname}?q=${searchTerm}`);
      }
    }
    // getResults('search?q=word%20cup&lr=en-US&num=10');
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
  console.log(location.pathname);
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex  flex-wrap flex-start space-y-6 sm:px-56">
          {results?.items?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link?.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.items?.map((item, index) => (
            <a
              className="sm:p-3 p-5"
              href={item.contextLink}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.originalImageUrl}
                alt={item.title}
                loading="lazy"
              />
              <p className="w-36 break-words text-sm mt-2">{item.title}</p>
            </a>
          ))}
        </div>
      );

    case "/news":
      return (
        <div className="flex flex-wrap justify-between items-center space-y-6 sm:px-56">
          {results?.articles?.map((article, index) => (
            <a
              className="sm:w-96 w-80 p-3 hover:underline"
              href={article.link}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={article.image}
                alt={article.source}
                className="w-full h-44 object-cover"
              />
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                {article.title}
              </p>
              <div className="flex gap-4">
                {/* {article.source} */}
                <a
                  href={article.source.replace(/\s/g, "")}
                  target="_blank"
                  rel="noreferrer"
                >
                  {article.source}
                </a>
              </div>
            </a>
          ))}
        </div>
      );

    case "/videos":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.items?.map((video, index) => (
            <div key={index} className="p-3">
              <ReactPlayer url={video.link} controls width="355px" height="200px" />
              <p className="w-64 break-words text-sm mt-2">{video.title}</p>
            </div>
          ))}
        </div>
      );
    default:
      return "Error";
  }
}
