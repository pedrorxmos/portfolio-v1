import { Outlet } from 'react-router-dom';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import Cursor from './components/Cursor/Cursor';
import Topbar from './components/Topbar/Topbar';
import './scss/global.scss';
import Grain from './components/Grain/Grain';
import Three from './components/Three/Three';
import { LocacleProvider } from './providers/LocaleContext';
function App() {
	const firestoreInstance = getFirestore(useFirebaseApp());

	return (
		<>
			<LocacleProvider>
				<FirestoreProvider sdk={firestoreInstance}>
					{/* <Cursor /> */}
					<Outlet />
					<Three />
					<Topbar />
					{/* <Grain /> */}
				</FirestoreProvider>
			</LocacleProvider>
		</>
	);
}

export default App;
