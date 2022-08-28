// jshint esversion:6
import React from "react";

function ToDoItem(props) {

	// const [isDone, setIsDone] = useState(false);

	// function handleClick() {
	// 	// console.log("I am clicked");
  //   setIsDone ((prevValue) => {
	// 		return !prevValue;
	// 	});
  // }

	// return (
	// 	<div onClick={handleClick}>
	// 		<li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
	// 	</div>
	// );

	// return (
	// 	<div onClick={props.onChecked}>
	// 		<li>{props.text}</li>
	// 	</div>
	// );

	return (
		<div onClick={() => {
			props.onChecked(props.id);
		}}>
			<li>{props.text}</li>
		</div>
	);
}

export default ToDoItem;