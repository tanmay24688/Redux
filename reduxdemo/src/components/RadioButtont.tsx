import React from "react";

const RadioButton=()=>{
    return(
        <div>
            <input type="radio" name="country" value="America"/>America
            <input type="radio" name="country" value="India"/>India
            <input type="radio" name="country" value="Canada"/>Canada
        </div>
    );
};

export default RadioButton;
