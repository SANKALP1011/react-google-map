import React from "react";

export const BlueButton = ({label , handler})=>{
    return(
        <div>
            <button className="BlueButton" onClick={handler}>{label}</button>
        </div>
    )
}