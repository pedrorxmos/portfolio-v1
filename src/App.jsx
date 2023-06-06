import { Outlet } from 'react-router-dom';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, FirestoreSdkContext, useFirebaseApp } from 'reactfire';
import Cursor from './components/Cursor/Cursor';
import Topbar from './components/Topbar/Topbar';
import './scss/global.scss';
import Div100vh from 'react-div-100vh';

function App() {
	const firestoreInstance = getFirestore(useFirebaseApp());

	return (
		<>
			<FirestoreProvider sdk={firestoreInstance}>
				<Div100vh>
					<Cursor />
					<Topbar />
					<Outlet />
				</Div100vh>
			</FirestoreProvider>
		</>
	);
}

export default App;
