import { Outlet } from 'react-router-dom';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import Cursor from './components/Cursor/Cursor';
import Topbar from './components/Topbar/Topbar';
import './scss/global.scss';
import Grain from './components/Grain/Grain';
import Three from './components/Three/Three';
function App() {
	const firestoreInstance = getFirestore(useFirebaseApp());

	return (
		<>
			<FirestoreProvider sdk={firestoreInstance}>
				{/* <Div100vh> */}
				{/* <Cursor /> */}

				<Outlet />
				<Three />
				<Topbar />
				{/* <Grain /> */}
				{/* </Div100vh> */}
			</FirestoreProvider>
		</>
	);
}

export default App;
