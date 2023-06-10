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
	const [color, setColor] = useState(new THREE.Color('hsl(50, 100%, 77%)'));

	// const [pointer, setPointer] = useState({ x: 0, y: 0 });

	// window.addEventListener('mousemove', (e) => {
	// 	const ndcX = (e.pageX / size.width) * 2 - 1;
	// 	const ndcY = -(e.pageY / size.height) * 2 + 1;

	// 	// Create a 3D vector in NDC space
	// 	const vector = new THREE.Vector3(ndcX, ndcY, -90);

	// 	// Convert the vector from NDC space to world space
	// 	vector.unproject(camera);

	// 	setPointer(vector);
	// });

	const getSize = () => {
		const res = window.innerWidth / window.innerHeight;

		if (res <= 0.45) return maxSize.x * 0.054;
		if (res > 0.45 && res <= 0.6) return maxSize.x * 0.052;
		if (res > 0.6 && res <= 0.75) return maxSize.x * 0.045;
		if (res > 0.75 && res <= 1.02) return maxSize.x * 0.04;
		if (res > 1.2 && res <= 0.75) return maxSize.x * 0.036;
		if (res > 0.75 && res <= 1.25) return maxSize.x * 0.033;
		if (res > 1.25 && res <= 1.4) return maxSize.x * 0.03;
		if (res > 1.4 && res <= 1.6) return maxSize.x * 0.029;
		if (res > 1.6 && res <= 1.75) return maxSize.x * 0.028;
		if (res > 1.75) return maxSize.x * 0.026;

		return maxSize.x * 0.023;
	};

	const getPos = () => {
		const res = window.innerWidth / window.innerHeight;

		if (res <= 0.45) return [maxSize.x * -0.62, maxSize.y * -0.56, 0];
		if (res > 0.45 && res <= 0.6) return [maxSize.x * -0.65, maxSize.y * -0.58, 0];
		if (res > 0.6 && res <= 0.75) return [maxSize.x * -0.68, maxSize.y * -0.62, 0];
		if (res > 0.75 && res <= 1.02) return [maxSize.x * -0.72, maxSize.y * -0.65, 0];
		if (res > 1.02 && res <= 1.25) return [maxSize.x * -0.57, maxSize.y * -0.68, 0];
		if (res > 1.25 && res <= 1.6) return [maxSize.x * -0.43, maxSize.y * -0.74, 0];
		if (res > 1.6) return [maxSize.x * -0.52, maxSize.y * -0.73, 0];

		return [maxSize.x * -0.52, maxSize.y * -0.73, 0];
	};

	// useFrame(() => {
	// 	const worldPosition = new THREE.Vector3();
	// 	const x = (pointer.x * size.width) / (0.017778 * window.innerWidth);
	// 	const y = (pointer.y * size.height) / (0.0015 * window.innerHeight);
	// 	worldPosition.set(x, y, -90);
	// 	worldPosition.unproject(camera);

	// 	mesh.current.lookAt(worldPosition);
	// 	// console.log(mesh);
	// });

	const { nodes, materials } = useGLTF('/models/scene.glb');

	useEffect(() => {
		materials.yellow.color = color;
		document.querySelector(':root').className !== 'dark'
			? setColor(new THREE.Color('hsl(50, 100%, 77%)'))
			: setColor(new THREE.Color('hsl(50, 20%, 30%)'));
	}, [color]);
	return (
		<group {...props} dispose={null}>
			<mesh
				ref={mesh}
				geometry={nodes?.blob1.geometry}
				receiveShadow
				material={materials.yellow}
				// position={[maxSize.x + 100, maxSize.y, 0]}
				position={getPos()}
				rotation={[0, 0, 0]}
				scale={getSize()}
			/>
		</group>
	);
}

useGLTF.preload('/models/scene.glb');
