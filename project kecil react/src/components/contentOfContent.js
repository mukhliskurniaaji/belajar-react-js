import React from "react";

function ContentOfContent({name, tag}) {
    return (
        <div className="content-item__body">
            <h3 className="content-item__title">{name}</h3>
            <p className="content-item__username">@{tag}</p>
        </div>
    )
}

export default ContentOfContent;