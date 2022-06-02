import React from "react";

export const DistanceBox = ({distance,duration}) =>{
   return<>
       <div className="DistanceDiv shadow-md">
                <div className="TopDiv">
                     <p className="DistanceText">Distance</p>
                     <h2 className="DistanceNumberText">{distance}</h2>
                </div>
                <div className="BottomDiv ">
                      <h2 className="DurationText">The duration to reach between is {duration}</h2>
                </div>
             </div>
   </>
}
export default DistanceBox;