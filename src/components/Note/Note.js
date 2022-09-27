import React from 'react'
import './Note.scss'

export default function Note(props) {
	return (
		<div className='note'>
			<h1 className='note-title'>{props.title}</h1>
			<div className='note-content'>{props.content}</div>
		</div>
	)
}
