import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, title: '', content: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value })
	};

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.title || !user.content) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Title</label>
			<input type="text" name="title" value={user.title} onChange={handleInputChange} />
			<label>Content</label>
			<input type="text" name="content" value={user.content} onChange={handleInputChange} />
			<button>Add New Note</button>
		</form>
	)
};

export default AddUserForm
