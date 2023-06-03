import { useParams } from 'react-router-dom';

function Project() {
	const id = useParams().id;

	return (
		<>
			<h1>Project.jsx - {id}</h1>
		</>
	);
}

export default Project;
