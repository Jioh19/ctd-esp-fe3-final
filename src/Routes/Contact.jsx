import React from 'react';
import Form from '../Components/Form';
import { useGlobalContext } from '../Components/utils/global.context';

const Contact = () => {
	const { state } = useGlobalContext();

	return (
		<div className={`contact page-${state.theme}`}>
			<div className="contact-container">
				<div className={`contact-content ${state.theme}`}>
					<div className="contact-header">
						<h2>¿Necesitas más info?</h2>
						<p>Mándanos tus preguntas y te contactaremos!</p>
					</div>
					<div className="contact-form-wrapper">
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
