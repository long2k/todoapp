import React from 'react'

const DND = (props) => {
    const drop = e => {
        e.preventDefault();
        const item_id = e.dataTransfer.getData('item_id');
        const item = document.getElementById(item_id);
        item.style.display = 'block';
        e.target.appendChild(item);
        e.preventDefault();
    }
    const dragOver = e => {
        e.preventDefault()
    }
    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {
                props.children
            }
        </div>
    )
}

export default DND