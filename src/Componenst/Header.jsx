import React from "react";

export const Header = ({text})=>{
    return(
        <div className="HeaderBlock">
            <h2 className="HeaderText">{text}</h2>
        </div>
    )
}