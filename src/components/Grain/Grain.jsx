import './Grain.scss';
import { use100vh } from 'react-div-100vh';

function Grain() {
	return <div className="noise-grain" style={{ height: use100vh() }}></div>;
}

export default Grain;
