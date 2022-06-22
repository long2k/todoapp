import React from 'react'
import PropTypes from 'prop-types';
import "./item.css";

const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('item_id', target.id);

    setTimeout(() => {
        target.style.display = 'none';
    }, 0);
}
const dragOver = e => {
    e.stopPropagation()
}


const Item = (props) => {
    return (
        <>
            <div className="home__body-item"
                id={props.id}
                draggable={props.draggable}
                onDragStart={dragStart}
                onDragOver={dragOver}
            >
                <div className="home__body-container">
                    <p className="home__body-item-header">{props.title}</p>
                    <p className="home__body-item-content">{props.content}</p>
                    <p className="home__body-item-end">{props.deadline}</p>
                </div>
            </div>
        </>
    )
}

// Item.propTypes = {
//     title: PropTypes.string,
//     content: PropTypes.string,
//     deadline: PropTypes.string
// }

export default Item