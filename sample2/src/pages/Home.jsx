import React from "react";
import Navbar from "../components/Navbar";
const Home = ({ Meeee }) => {

    console.log(Meeee)
    return (
        <>
        <div className="w-[10vh] h-[10vh] bg-yellow-200 text-black font-bold gap-4">
            {Meeee}
        </div>
        
        </>
        
    )
}

export default Home;