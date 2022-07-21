import React from "react";
import ListContent from './listContent';

function ListBar({ContentsFromData, onDelete}) {
    return (
        <div className="contact-list">
            {
                ContentsFromData.map((contact) => (
                    <ListContent 
                    key={contact.id}
                    id ={contact.id}
                    onDelete={onDelete} 
                    {...contact} />
                ))
            }
        </div>
    );
}

export default ListBar;