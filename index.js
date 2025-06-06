import React from "react";
import ReactDOM from "react-dom/client";

const Headercomponent = function (){
    return(
        <div>
            <h1>Hello this is dhruv patel</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headercomponent/>);
