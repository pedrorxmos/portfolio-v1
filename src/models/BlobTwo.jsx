import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { usePixeltoScene } from '../hooks/useThreeFunctions';

export default function Model(props) {
	const mesh = React.useRef();
	const [dir, setDir] = useState(0.0005);
	const { camera, size } = useThree();
	const maxSize = usePixeltoScene(window.innerWidth, window.innerHeight);

	const [pointer, setPointer] = useState({ x: 0, y: 0 });

	window.addEventListener('mousemove', (e) => {
		const ndcX = (e.pageX / size.width) * 2 - 1;
		const ndcY = -(e.pageY / size.height) * 2 + 1;

		// Create a 3D vector in NDC space
		const vector = new THREE.Vector3(ndcX, ndcY, -90);

		// Convert the vector from NDC space to world space
		vector.unproject(camera);

		setPointer(vector);
	});

	useFrame(() => {
		const worldPosition = new THREE.Vector3();
		const x = (pointer.x * size.width) / (0.017778 * window.innerWidth);
		const y = (pointer.y * size.height) / (0.0015 * window.innerHeight);
		worldPosition.set(x, y, -90);
		worldPosition.unproject(camera);

		mesh.current.lookAt(worldPosition);
		// console.log(mesh);
	});

	const { nodes, materials } = useGLTF('/models/scene.glb');
	useEffect(() => {
		// console.log(materials);
	}, []);
	return (
		<group {...props} dispose={null}>
			<mesh
				ref={mesh}
				geometry={nodes?.blob2.geometry}
				receiveShadow
				material={materials.purple}
				// position={[maxSize.x + 100, maxSize.y, 0]}
				position={[maxSize.x - maxSize.x * 0.85, usePixeltoScene(0, window.innerHeight / 3.2).y + 0.5, 0]}
				rotation={[0, 0, 0]}
				scale={window.innerWidth * 0.0001}
			/>
		</group>
	);
}

useGLTF.preload('/models/scene.glb');
