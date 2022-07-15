import React, { FormEvent, useReducer } from "react";

type ContactFormStateType = {
	name: string;
	email: string;
	message: string;
};

const DefaultContactForm: ContactFormStateType = {
	name: "",
	email: "",
	message: "",
};

enum FormReducerActionEnum {
	CHANGE = "CHANGE",
	SUBMIT = "SUBMIT",
}

type FormReducerAction = {
	type: FormReducerActionEnum;
	payload: ContactFormStateType;
};

// Take the old form values and add the new value to it.
// this will modify the state of the form in a react friendly way.
const formReducer = (
	state: ContactFormStateType,
	action: FormReducerAction
) => {
	const { type, payload } = action;

	switch (type) {
		case FormReducerActionEnum.CHANGE:
			// Merge the current state with the
			// new values from the form located
			// in the payload.
			return {
				...state,
				...payload,
			};

		case FormReducerActionEnum.SUBMIT:
			// Return the current state of the
			// form data.
			return {
				...payload,
			};

		default:
			// Replace this with something more meaningful.
			return state;
	}
};

const ContactContainer = () => {
	const [formValues, formDispatch] = useReducer(
		formReducer,
		DefaultContactForm
	);

	const handleFormSubmit = (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault();

		return formDispatch({
			type: FormReducerActionEnum.SUBMIT,
			payload: { ...formValues },
		});
	};

	const handleFormChange = (
		event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.currentTarget;

		return formDispatch({
			type: FormReducerActionEnum.CHANGE,
			payload: {
				...formValues,
				[name]: value,
			},
		});
	};

	return (
		<div className="flex flex-col items-center py-3 px-6 space-y-6">
			<div className="flex flex-col items-center">
				<h1 className="font-RMO text-2xl">Contact Me</h1>
				<p className="font-Karla">
					Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
				</p>
			</div>
			<div className="bg-[#FFEAC5] p-6 rounded-[20px]">
				<form className="flex flex-col p-6 space-y-6 ">
					{/* Name and Email Area */}
					<div className="flex flex-row items-center space-x-6">
						<div className="flex flex-col space-y-1">
							<label>Name:</label>
							<input
								className="rounded-[6px] p-3"
								type="text"
								name="name"
								value={formValues.name}
								onChange={handleFormChange}
							/>
						</div>
						<div className="flex flex-col space-y-1">
							<label>Email:</label>
							<input
								className="rounded-[6px] p-3"
								type="text"
								name="email"
								value={formValues.email}
								onChange={handleFormChange}
							/>
						</div>
					</div>
					{/* Message Area */}
					<div className="flex flex-col space-y-1">
						<label>Message:</label>
						<textarea
							className="rounded-[6px] p-3"
							name="message"
							value={formValues.message}
							onChange={handleFormChange}
						/>
					</div>
					{/* Submit Button */}
					<input
						className="bg-blue-600 hover:bg-blue-300 hover:cursor-pointer p-3 rounded-[6px] text-[#E0E0E0]"
						type="submit"
						onClick={handleFormSubmit}
					/>
				</form>
			</div>
		</div>
	);
};

export default ContactContainer;
