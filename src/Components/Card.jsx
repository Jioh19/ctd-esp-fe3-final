import React from 'react';
import { useGlobalContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Card = ({ dentist }) => {
	const { state, favorites, toggleFavorite } = useGlobalContext();
	const isFavorite = favorites.includes(dentist.id);

	return (
		<div className={`card ${state.theme}`}>
			<Link to={`/dentista/${dentist.id}`}>
				<h3>{dentist.name}</h3>
				<p>{dentist.username}</p>
			</Link>
			<button onClick={() => toggleFavorite(dentist.id)}>{isFavorite ? '❤️' : '🤍'}</button>
		</div>
	);
};

export default Card;
