import React from 'react'
import Form from '../Components/Form'
import { useGlobalContext } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state, favorites, toggleFavorite } = useGlobalContext();
  return (
		<div className={`page-${state.theme}`}>
			<h2>Want to know more?</h2>
			<p>Send us your questions and we will contact you</p>
			<Form />
		</div>
	);
}

export default Contact