import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

function Project() {
	const id = useParams().id;

	return (
		<>
			<main className="project-detail">Project.jsx - {id}</main>
			<Footer />
		</>
	);
}

export default Project;
