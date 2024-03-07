import React, { useState } from "react";


//create your first component
const Home = () => {
	//making the default value of input be just blank initial state
	const [ inputValue, setInputValue] = useState("");
	//making the todo list a blank array initial state
	const [ todo, setTodo] = useState([]);

	

	return (
		<div className="container">
			<h1>Very Random To Do List</h1>
			<ul>
				<li> 
				<input 
 					type="text"
					
  					onChange={(event) => setInputValue(event.target.value)}
  					value={inputValue}
 					placeholder="What do you need to do?"
					onKeyDown={(event) => {
					console.log("Key pressed:", event.key);
   					 	if (event.key === "Enter") {
     		 			setTodo(todo.concat(inputValue));
   	 					}
 	 				}}
 				/>
				</li>
				
  {todo.map((task, index) => (
    <li key={index}>
      {task}
      <i className="fas fa-trash" onClick={() => setTodo(todo.filter((_, currentIndex) => currentIndex !== index))}></i>
    </li>
  ))}
			</ul>
			<div>{todo.length} items left</div>
		</div>
	);
};

export default Home;
