import { useParams } from 'react-router-dom';

import { doc } from 'firebase/firestore';
import { useFirestore, useFirestoreDocData } from 'reactfire';

import Footer from '../../components/Footer/Footer';

function Project() {
	const id = useParams().id;
	const aboutData = doc(useFirestore(), 'projects', id);
	const { data } = useFirestoreDocData(aboutData);

	console.log(data);

	return (
		<>
			<main className="project-detail main">Project.jsx - {id}</main>
			<Footer />
		</>
	);
}

export default Project;
