import { Outlet } from 'react-router-dom';
import Cursor from './components/Cursor/Cursor';
import Topbar from './components/Topbar/Topbar';
import './scss/global.scss';

function App() {
	return (
		<>
			<Cursor />
			<Topbar />
			<Outlet />
		</>
	);
}

export default App;
