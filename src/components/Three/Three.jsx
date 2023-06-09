import { Canvas } from '@react-three/fiber';
import './Three.scss';
import Eye from '../../models/Eye';
import BlobOne from '../../models/BlobOne';
import BlobTwo from '../../models/BlobTwo';
import BlobThree from '../../models/BlobThree';
import LineOne from '../../models/LineOne';
import LineTwo from '../../models/LineTwo';
import { use100vh } from 'react-div-100vh';
import Light from './Light';

function Three() {
	return (
		<>
			<div id="canvas-container" className="threejs" style={{ height: use100vh() }}>
				<Canvas orthographic camera={{ position: [0, 0, 10], left: -2, right: 2, top: 2, bottom: -2, zoom: 100, far: 2000, near: 1 }}>
					<ambientLight intensity={0.6} />
					<hemisphereLight args={['#fff', '#333', 0.5]} />
					<Light />
					<Eye />
					{/* <BlobOne /> */}
					<BlobTwo />
					{/* <BlobThree /> */}
					<LineOne />
					<LineTwo />
				</Canvas>
			</div>
		</>
	);
}

export default Three;
