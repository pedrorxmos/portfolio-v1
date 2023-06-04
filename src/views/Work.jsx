import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

import Footer from '../components/Footer/Footer';

function Work() {
	const workData = collection(useFirestore(), 'projects');
	const { data } = useFirestoreCollectionData(workData);
	console.log(data);

	return (
		<>
			<main className="work">work.jsx</main>
			<Footer />
		</>
	);
}

export default Work;
