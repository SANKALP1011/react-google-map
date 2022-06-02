import React from "react";
import Logo from "../Assets/Logo.png";

export const TopBar = () =>{
    return<>
         <div className="TopBar shadow-md">
             <img src={Logo} className="Logo" alt="logo"/>
         </div>
    </>
}