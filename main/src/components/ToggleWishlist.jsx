import React, { useState } from "react";
import { Heart } from "react-bootstrap-icons";

export default function ToggleVisibility({ children }) {

    const [show, setShow] = useState();

    function toggleShow() {
        setShow(!show);
    }
    let buttonText = <Heart />

    return (
        <div className="component-container">
            {show && children}
            <button onClick={toggleShow} className="wishlist-btn" >{buttonText}</button>
        </div>
    );
}