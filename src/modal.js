import React from 'react';

function Modal(props){

    let {content, handleChange, value} = props
    
    // close modal by using setState from parent component
    const closeModal = _ => {
        handleChange(false)
    }

    return (
       <div>
            {
                value && (
                    <aside className='_boQT7'>
                        <div className='_3PJkI'>
                            <button className="_3n8zG" onClick={closeModal}>&#x2715;</button>
                            <h3>{content}</h3>
                        </div>
                    </aside>
                )
           
            }
       </div>
    )
}
export default Modal;