import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Addnotes from './components/Addnotes';

export default function App() {
  let a;
  if (localStorage.getItem('todos') === null) {
    a = [];
  } else {
    a = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  }
  const [todos, setTodos] = useState(a);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Navbar />
      <Addnotes addTodo={addTodo} />
      <Notes todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}
