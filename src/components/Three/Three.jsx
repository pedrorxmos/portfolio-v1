import { Canvas } from '@react-three/fiber';
import './Three.scss';
import Eye from '../../models/Eye';
import { use100vh } from 'react-div-100vh';

function Three() {
	return (
		<>
			<div id="canvas-container" className="threejs" style={{ height: use100vh() }}>
				<Canvas orthographic camera={{ position: [0, 0, 2], left: -2, right: 2, top: 2, bottom: -2, zoom: 100 }}>
					<ambientLight intensity={0.2} />
					<directionalLight color="white" position={[0, 0.1, 1]} />
					<Eye />
				</Canvas>
			</div>
		</>
	);
}

export default Three;
