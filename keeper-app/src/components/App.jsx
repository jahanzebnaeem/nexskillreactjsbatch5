// jshint esversion:6

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

// console.log(notes);

// function createNotes(noteItem) {
// 	return <Note title={noteItem.title} content={noteItem.content} />
// }

function App() {
	return (
		<div>
			<Header />
			{/* <Note /> */}
			{/* <Note title='This is a title' content='This is content'/> */}
			{/* {notes.map(createNotes)} */}
			{notes.map(noteItem => 
				<Note title={noteItem.title} content={noteItem.content} />
			)}
			<Footer />
		</div>
	);
}

export default App;