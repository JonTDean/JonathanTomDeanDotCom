import React from "react";

const ContactContainer = () => {
	return (
	<div>
		<h1>Say Hello!</h1>
		<div>
			<form>
				<label>Name:</label>
				<input type="text" name="name" />
				<label>Email:</label>
				<input type="text" name="email" />
				<label>Message:</label>
				<textarea name="message" />
				<input type="submit" value="Send" />
			</form>
		</div>
	</div>
	);
};

export default ContactContainer;
