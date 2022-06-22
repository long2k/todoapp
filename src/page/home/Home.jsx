import React, { useState, useRef, useEffect } from 'react'
import NewItem from '../../components/new-item/NewItem';
import { STATUS_WORK } from '../../constants/index';
import Item from '../../components/item-work/Item';
import DND from '../../components/dnd/DND';
import "./home.css";
let items = [
  {
    title: 'Công Việc ',
    content: 'Dậy nấu cơm',
    deadline: 12324,
    status: 0
  },
  {
    title: 'Công tác ',
    content: 'Dậy nấu cơm',
    deadline: 12324,
    status: 1
  },
  {
    title: 'Công nhân ',
    content: 'Dậy nấu cơm',
    deadline: 12324,
    status: 2
  },
]


function useOutside(ref, setButtonPopup) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(ref)
        setButtonPopup(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, setButtonPopup])
}

const Home = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const popupRef = useRef(null);
  useOutside(popupRef, setButtonPopup);
  function handleClick(){
    setButtonPopup(true)
  }
  
  return (
    <div className="home" ref={popupRef}>
      <div className="home__header">
      </div>
      <div className="home__body">
        {
          STATUS_WORK.map((e, idx) => (
            <>
              <div className='work-item'>
                <div className="work-item-header">
                  <h3>{e.name}</h3>
                </div>
                <div className="work-item-body">
                <button className='add-btn' onClick={handleClick} >+</button>
                  <DND 
                    id={`dnd-${idx}`}
                    className="dnd"
                  >
                    {
                      items.map((item, id) => (
                            item.status === e.status && <Item
                                                          id={`item_${id}`}
                                                          title={item.title}
                                                          content={item.content}
                                                          deadline={item.deadline}
                                                          draggable={true}
                                                        />
                      ))
                    }
                  </DND>
                </div>
              </div>
            </>
          ))
        }
        <NewItem trigger={buttonPopup} popupRef={popupRef}/>
      </div>
    </div>
  )
}

export default Home