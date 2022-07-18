import React from "react";
import ListContent from './listContent';

function ListBar({ContentsFromData}) {
    return (
        <div className="contact-list">
            {
                ContentsFromData.map((contact) => (
                    <ListContent key={contact.id} {...contact} />
                ))
            }
        </div>
    )
}

export default ListBar;