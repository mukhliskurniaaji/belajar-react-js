import React from "react";

function ImageOfContent({imageUrl}) {
    return (
        <div className="contact-item__image">
            <img src={imageUrl} alt='content-avatar'/>
        </div>
    )
}

export default ImageOfContent;