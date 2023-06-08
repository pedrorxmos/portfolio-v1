import { Canvas } from '@react-three/fiber';
import './Three.scss';
import Eye from '../../models/Eye';
import { use100vh } from 'react-div-100vh';

function Three() {
	return (
		<>
			<div id="canvas-container" className="threejs" style={{ height: use100vh() }}>
				<Canvas orthographic camera={{ position: [0, 0, 10], left: -2, right: 2, top: 2, bottom: -2, zoom: 100, far: 2000, near: 1 }}>
					<ambientLight intensity={0.6} />
					<hemisphereLight args={['#fff', '#333', 0.5]} />
					<directionalLight color="hsl(60, 10%, 96%)" intensity={0.6} position={[0, 0.1, 1]} />
					<Eye />
				</Canvas>
			</div>
		</>
	);
}

export default Three;
