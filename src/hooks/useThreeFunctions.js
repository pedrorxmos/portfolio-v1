import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const usePixeltoScene = (htmlX, htmlY) => {
	const { camera, size } = useThree();
	// Calculate the normalized device coordinates (NDC) from HTML position
	const ndcX = (htmlX / size.width) * 2 - 1;
	const ndcY = -(htmlY / size.height) * 2 + 1;

	// Create a 3D vector in NDC space
	const vector = new THREE.Vector3(ndcX, ndcY, 0);

	// Convert the vector from NDC space to world space
	vector.unproject(camera);

	return vector;
};
