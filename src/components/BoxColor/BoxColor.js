import React from "react";

export function BoxColor({r, g, b}) {
    let RGBColor = {backgroundColor: `rgb(${r},${g},${b})`}
    return (
        <div className="RGBDiv" style={RGBColor}>
        <p>RGB ({r},{g},{b})</p>
        </div>
    )
}