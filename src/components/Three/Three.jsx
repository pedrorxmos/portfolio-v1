import { Canvas, useThree } from '@react-three/fiber';
import './Three.scss';
import Eye from '../../models/Eye';
import BlobOne from '../../models/BlobOne';
import BlobTwo from '../../models/BlobTwo';
import BlobThree from '../../models/BlobThree';
import LineOne from '../../models/LineOne';
import LineTwo from '../../models/LineTwo';
import { use100vh } from 'react-div-100vh';
import Light from './Light';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

function Three() {
	const [pointer, setPointer] = useState({ x: 0, y: 0 });
	useEffect(() => {
		window.addEventListener('mousemove', (e) => {
			const ndcX = (e.pageX / window.innerWidth) * 2 - 1;
			const ndcY = -(e.pageY / window.innerHeight) * 2 + 1;
			// console.log(ndcX);
			// Create a 3D vector in NDC space
			const vector = new THREE.Vector3(ndcX, ndcY, -90);
			// Convert the vector from NDC space to world space
			setPointer(vector);
		});
	}, []);

	return (
		<>
			<div id="canvas-container" className="threejs" style={{ height: use100vh() }}>
				<Canvas orthographic camera={{ position: [0, 0, 10], left: -2, right: 2, top: 2, bottom: -2, zoom: 100, far: 2000, near: 1 }}>
					<ambientLight intensity={0.6} />
					<hemisphereLight args={['#fff', '#333', 0.5]} />
					<Light />
					<Eye pointer={pointer} />
					<BlobOne pointer={pointer} />
					<BlobTwo pointer={pointer} />
					<BlobThree pointer={pointer} />
					<LineOne pointer={pointer} />
					<LineTwo pointer={pointer} />
				</Canvas>
			</div>
		</>
	);
}

export default Three;
