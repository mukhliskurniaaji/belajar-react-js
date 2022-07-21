import React from "react";
import ImageOfContent from './imageOfContent'
import ContentOfContent from './contentOfContent'
import DeleteButton from "./deleteButton";

function ListContent({imageUrl, name, tag, id, onDelete}) {
    return (
        <div className="contact-item">
            <ImageOfContent imageUrl={imageUrl} />
            <ContentOfContent name={name} tag={tag} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
}

export default ListContent;