import React, {useRef, useEffect} from 'react'
import "./new-item.css";



const NewItem = (props) => {
   
    return ( (props.trigger) ?
    (
        <div className="container-popup"  >
                <form className='form-create' ref={props.popupRef}>
                    <div class="mb-3 title">
                        <h1>Create new work</h1>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Title work</label>
                        <input type="text" class="form-control" id="name" aria-describedby="name" required />
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">Content</label>
                        <input type="password" class="form-control" id="content" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-check-label" for="deadline">Deadline</label>
                        <input type="datetime-local" className='form-control' id="deadline" required />
                    </div>
                    <div className="mb-3">
                    <label class="form-check-label" for="deadline">Status</label>
                        <input type="text" className='form-control' id="deadline" required />
                    </div>
                    <button type="submit" class="btn btn-primary btn-create">Submit</button>
                </form>
            </div>
    ) : ""   
    )
}

export default NewItem