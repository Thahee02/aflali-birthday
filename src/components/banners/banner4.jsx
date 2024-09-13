import axios from "axios";
import { useEffect, useState } from "react";
import YouTubeEmbed from "../videoCard/videoCard";

const BannerSection4 = () => {

    const videos = ["ksUd6q2pMog", "7HzfJ0ptRD0", "MVYcu6OfJ9M"] 

    return ( 
        <div className="bg-yellow-600 px-2">
            <h1 className="text-center text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold py-8 z-10">A Birthday and Musical Journey</h1>
            <div className="py-8 w-full flex justify-around flex-wrap max-xl:gap-8">
                {videos.map(video => {
                    return <YouTubeEmbed videoId={video}  />                   
                })}
            </div>
        </div>
     );
}
 
export default BannerSection4;

// https://www.googleapis.com/youtube/v3/search?part=snippet&q=aflali&type=video&maxResults=5&key=AIzaSyB6bh4zHIGdEhgeI66KljFk2iqA4vTwkAA