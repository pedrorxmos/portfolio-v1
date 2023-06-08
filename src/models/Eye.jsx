/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./src/assets/eye.glb
*/

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

	// useFrame(({ mouse, viewport }) => {
	// 	// mesh.current.position.y += 0.01;
	// 	// if (dir > 0) {
	// 	// 	if (mesh.current.position.y >= 0.1) setDir(-dir);
	// 	// } else {
	// 	// 	if (mesh.current.position.y <= -0.1) setDir(-dir);
	// 	// }
	// 	// mesh.current.position.y += dir;
	// 	// const x = (mouse.x * viewport.width) / 100;
	// 	// const y = (mouse.y * viewport.height) / 200;
	// 	// mesh.current.lookAt(0, x, y);

	// });

	useFrame(({ mouse }) => {
		const worldPosition = new THREE.Vector3();
		const x = mouse.x * size.width;
		const y = mouse.y * size.height * 5;
		worldPosition.set(x, y, -90);
		worldPosition.unproject(camera);

		mesh.current.lookAt(worldPosition);
		console.log(mesh);
	});

	const { nodes, materials } = useGLTF('/models/eye.glb');
	useEffect(() => {
		// console.log(camera);
	}, []);
	return (
		<group {...props} dispose={null}>
			<mesh
				ref={mesh}
				geometry={nodes?.eye.geometry}
				receiveShadow
				material={materials.material}
				// position={[maxSize.x + 100, maxSize.y, 0]}
				position={[maxSize.x - window.innerWidth * 0.00193611, usePixeltoScene(0, window.innerHeight / 2).y + 0.5, 0]}
				rotation={[0, 0, 0]}
				scale={window.innerWidth * 0.000194444}
			/>
		</group>
	);
}

useGLTF.preload('/models/eye.glb');