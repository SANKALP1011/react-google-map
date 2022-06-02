import React from "react";

export const BlueButton = ({label , handler})=>{
    return(
        <div>
            <button className="BlueButton shadow-md" onClick={handler}>{label}</button>
        </div>
    )
}