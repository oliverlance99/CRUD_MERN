import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const TodoForm = ({ todo, onSubmit }) => {
	const { register, handleSubmit } = useForm({
		defaultValues: { Text: todo ? todo.text : "" },
	});
	const history = useHistory();

	const submitHandler = handleSubmit((data) => {
		onSubmit(data)
		history.push("/");
	});

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<label htmlFor="text">Text:</label>
				<input 
					className="form-control" 
					{...register("Text")} 
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