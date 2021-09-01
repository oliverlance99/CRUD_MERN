import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export const TodoForm = ({ todo, onSubmit }) => {
	const { register, handleSubmit } = useForm({
		defaultValues: { text: todo ? todo.text : "" },
	});

	const submitHandler = handleSubmit((data) => {
		onSubmit(data)
	});

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<label htmlFor="Text">Text:</label>
				<input 
					className="form-control" 
					{...register("text")} 
					type="text" 
					id="text" 
				/>
			</div>
			<div className="form-group mt-3">
				<button type="submit" className="btn btn-primary">
					Save Todo
				</button>
			</div>
		</form>
	);
}