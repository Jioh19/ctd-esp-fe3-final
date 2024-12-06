import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
	const { id } = useParams();
	console.log(id)
	const { state, favorites, toggleFavorite } = useGlobalContext();
	const [dentist, setDentist] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDentist = async () => {
			try {
				const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
				if (!response.ok) {
					throw new Error('No se pudo obtener la información del dentista');
				}
				const data = await response.json();
				setDentist(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchDentist();
	}, [id]);

	if (loading) return <div className={`page-${state.theme}`}>Cargando...</div>;
	if (error) return <div className={`page-${state.theme}`}>Error: {error}</div>;
	if (!dentist) return <div className={`page-${state.theme}`}>No se encontró el dentista</div>;

	return (
		<div className={`page-${state.theme}`}>
			<h1>Detail Dentist {id}</h1>
			<div>
				<h2>{dentist.name}</h2>
				<p>Email: {dentist.email}</p>
				<p>Phone: {dentist.phone}</p>
				<p>Website: {dentist.website}</p>
			</div>
		</div>
	);
};

export default Detail;
