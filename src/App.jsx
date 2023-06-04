import { Outlet } from 'react-router-dom';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, FirestoreSdkContext, useFirebaseApp } from 'reactfire';
import Cursor from './components/Cursor/Cursor';
import Topbar from './components/Topbar/Topbar';
import './scss/global.scss';

function App() {
	const firestoreInstance = getFirestore(useFirebaseApp());

	return (
		<>
			<FirestoreProvider sdk={firestoreInstance}>
				<Cursor />
				<Topbar />
				<Outlet />
			</FirestoreProvider>
		</>
	);
}

export default App;
