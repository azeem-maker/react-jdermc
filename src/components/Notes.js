import React from 'react';
import Notesitem from './Notesitem';

export default function Notes(props){
  let myStyle={
    minHeight:"70vh"
 }
  return (
  
    <>
    <div className="container my-3"style={myStyle}>
      <h3 className="">Your Notes</h3>
      {props.todos.length===0?"No Notes to display":
      props.todos.map((todos)=>{ 
        console.log(todos.sno);
        return (<Notesitem  todos={todos}  key={todos.sno} onDelete={props.onDelete}/>)
      })}
    
    </div>
    </>
  )
}