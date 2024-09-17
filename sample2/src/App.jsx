import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
const App=() => {
    

    const Name="BHARATHI"
    const Meeee="lncewibvowebvoewbvo"
    return(
        <>
            <div className="h-screen w-screen flex flex-col justify-start items-center font-extrabold">
                <Navbar Name={Name}/>
                
            </div>
            <div className="h-[10%] w-screen "> 
                <Home Meeee={Meeee}/>
            </div>
        </>
    )
}
export default App;