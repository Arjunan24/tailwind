import React from "react"
import logo from "./Images/profilePic.jpeg"
function Myprofile(){
    return(
<div className="flex flex-wrap w-full justify-between">
    <div className="w-full bg-teal-500 md:w-1/2 rounded-lg p-4 md:w-1/3 h-screen justify-end">
    <div className=" flex items-center ml-5">
    <img src={logo} alt="profilepic" className=" ml-5 md:h-40 md:w-40 rounded-full  flex items-center"/>
    </div>
    </div>
  
    <div className=" flex items-center w-full md:w-1/2">
        <div>
        <p>Heartly</p>    
<p>Welcome to our profile</p>
<p>`Think differENT and work smartER</p>    
        </div>


</div>

</div>
    )
}
export default Myprofile