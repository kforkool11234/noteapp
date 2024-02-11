import React, { useState } from "react";


function Input(props){
    const [card , addcard]=useState({
        title: "",
        content: ""
    })
    function notes(event){
        const {name, value}=event.target;
        addcard((prevValues)=>{return{
            ...prevValues,
            [name]: value
        }
            
        })
    }

    return <div>
        <div ><form action="/">
            <input name="title" placeholder="Enter title" onChange={notes} ></input>
            <textarea name="content" placeholder="Enter the note" onChange={notes}  ></textarea>
            <button type="button" onClick={()=>props.onclicked(card)} ><span>add</span></button>
            </form></div>
    </div>
}
export default Input;