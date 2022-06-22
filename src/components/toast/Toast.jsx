import React, { useState, useEffect } from 'react'
import './toast.css';
import PropTypes from 'prop-types';


const Toast = (props) => {
    const toastList = props.toastList;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList)
    }, [toastList, list])

    useEffect(() => {
        const interval = setInterval(() => {
            if ( toastList.length && list.length) {
                deleteToast(toastList[0].id)
            }
        },3000);
        return () => {
            clearInterval(interval);
        }
    }, [toastList, list]);

    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }
    return (
        <>
            <div className="notification-container top-right">
                {
                    list.map((toast, i) =>
                        <div
                            key={i}
                            className="notification toast top-right"
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <div className="notification-image">
                                <img src={toast.icon} alt="" />
                            </div>
                            <div>
                                <p className='notification-title'>{toast.title}</p>
                                <p className="notification-message">
                                    {
                                        toast.description
                                    }
                                </p>
                            </div>
                            <button onClick={()=> deleteToast(toast.id)}>
                                X
                            </button>
                        </div>
                    )
                }
            </div>
        </>
    )
}

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    autoDelete: PropTypes.bool,
    autoDeleteTime: PropTypes.number
}

export default Toast