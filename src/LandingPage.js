import React from "react"
import landinglogo from "./Images/header.png"
import rapidlogo from "./Images/rapidqube-logo-2.png"
import data from "./Data"

function Landingpage(){


    return(
        <div className="flex">
            <div className="w-full md:w-1/2  h-screen">
            <div>
<img src={data.rapidlogo} alt="rapidqube"/>
            </div>
<div className=" lg:mt-40 ml-10 items-center ">
    
    <p className="text-4xl">{data.headText} </p>
    <p className="text-5xl font-bold ">{data.headTextBlockchain}</p>
<div className="">
    <p className="text-1xl "> {data.lmaintext}</p>

</div>
</div>
</div>
<div className="w-full md:w-1/2  h-screen">
<img src={data.landinglogo} alt="landingpage"/> </div>
        </div>
    )
}
export default Landingpage      