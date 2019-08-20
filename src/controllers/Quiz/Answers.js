import React from 'react';

export default function Answers({answers}) {
		return (
		  <div>
		  <button>{answers[0]}</button>
		  <button>{answers[1]}</button>
		  <button>{answers[2]}</button>
		  <button>{answers[3]}</button>
		  </div>)
}