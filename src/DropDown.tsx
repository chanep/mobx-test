import React from "react";

const DropDown = ({values} : {values: Array<{key: string, value: string}>}) => {
    return (
        <select>
            {values.map( v => <option key={v.key} value={v.key}>{v.value}</option>)}
        </select>
    ) 
}

export default DropDown;