import { Outlet } from 'react-router-dom';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import Cursor from './components/Cursor/Cursor';
import Topbar from './components/Topbar/Topbar';
import './scss/global.scss';
function App() {
	const firestoreInstance = getFirestore(useFirebaseApp());

	return (
		<>
			<FirestoreProvider sdk={firestoreInstance}>
				{/* <Div100vh> */}
				<Cursor />

				<Outlet />
				<Topbar />
				{/* </Div100vh> */}
			</FirestoreProvider>
		</>
	);
}

export default App;
