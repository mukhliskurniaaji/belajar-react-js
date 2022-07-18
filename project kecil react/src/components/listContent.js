import React from "react";
import ImageOfContent from './imageOfContent'
import ContentOfContent from './contentOfContent'

function ListContent({imageUrl, name, tag}) {
    return (
        <div className="contact-item">
            <ImageOfContent imageUrl={imageUrl} />
            <ContentOfContent name={name} tag={tag} />
        </div>
    )
}

export default ListContent;