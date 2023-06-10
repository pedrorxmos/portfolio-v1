import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { usePixeltoScene } from '../hooks/useThreeFunctions';

export default function Model({ pointer }) {
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

		if (document.querySelector('main').classList.contains('work')) {
			if (res <= 0.75) return maxSize.x * 0.05;
			if (res > 0.75 && res <= 1.25) return maxSize.x * 0.04;
			if (res > 1.25) return maxSize.x * 0.03;

			return maxSize.x * 0.04;
		}

		if (res <= 0.45) return maxSize.x * 0.055;
		if (res > 0.45 && res <= 0.6) return maxSize.x * 0.05;
		if (res > 0.75 && res <= 1.02) return maxSize.x * 0.045;
		if (res > 1.2 && res <= 0.75) return maxSize.x * 0.04;
		if (res > 0.75 && res <= 1.25) return maxSize.x * 0.035;
		if (res > 1.25 && res <= 1.4) return maxSize.x * 0.03;
		if (res > 1.4 && res <= 1.6) return maxSize.x * 0.028;
		if (res > 1.6 && res <= 1.75) return maxSize.x * 0.027;
		if (res > 1.75) return maxSize.x * 0.028;

		return maxSize.x * 0.035;
	};

	const getPos = () => {
		const res = window.innerWidth / window.innerHeight;

		if (document.querySelector('main').classList.contains('about')) return [maxSize.x * 0.7, maxSize.y * -1.8, 0];

		if (document.querySelector('main').classList.contains('work')) {
			if (res <= 0.75) return [maxSize.x * 0.1, maxSize.y * 0.24, 0];
			if (res > 0.75 && res <= 1.25) return [maxSize.x * 0.025, maxSize.y * 0.29, 0];
			if (res > 1.25) return [maxSize.x * -0.05, maxSize.y * 0.34, 0];

			return [maxSize.x * 0.5, maxSize.y * 0.34, 0];
		}

		if (res <= 0.45) return [maxSize.x * 0.35, maxSize.y * -0.8, 0];
		if (res > 0.45 && res <= 0.6) return [maxSize.x * 0.35, maxSize.y * -0.8, 0];
		if (res > 0.6 && res <= 0.75) return [maxSize.x * 0.35, maxSize.y * -0.8, 0];
		if (res > 0.75 && res <= 1.02) return [maxSize.x * 0.45, maxSize.y * -0.8, 0];
		if (res > 1.02 && res <= 1.25) return [maxSize.x * 0.5, maxSize.y * -0.78, 0];
		if (res > 1.25 && res <= 1.6) return [maxSize.x * 0.55, maxSize.y * -0.8, 0];
		if (res > 1.6) return [maxSize.x * 0.55, maxSize.y * -0.8, 0];

		return [maxSize.x * 0.55, maxSize.y * -0.8, 0];
	};

	useFrame(() => {
		const worldPosition = new THREE.Vector3();
		const x = (pointer.x * size.width) / (0.001 * window.innerWidth);
		const y = (pointer.y * size.height) / (0.0005 * window.innerHeight);
		worldPosition.set(x, y, -90);
		worldPosition.unproject(camera);

		mesh.current.lookAt(worldPosition);
		// console.log(mesh);
	});

	const { nodes, materials } = useGLTF('/models/scene.glb');
	useEffect(() => {
		materials.yellow.color = color;
		document.querySelector(':root').className !== 'dark'
			? setColor(new THREE.Color('hsl(50, 100%, 77%)'))
			: setColor(new THREE.Color('hsl(50, 20%, 30%)'));
	}, [color]);
	return (
		<motion.group dispose={null}>
			<motion.mesh
				ref={mesh}
				geometry={nodes?.line2.geometry}
				receiveShadow
				material={materials.yellow}
				// position={[maxSize.x + 100, maxSize.y, 0]}
				// position={getPos()}
				rotation={[0, 0, 0]}
				initial={{ scale: getSize(), x: 0, y: 0 }}
				transition={{ duration: 0.3 }}
				// scale={getSize()}
				animate={{ scale: getSize(), x: getPos()[0], y: getPos()[1] }}
			/>
		</motion.group>
	);
}

useGLTF.preload('/models/scene.glb');
