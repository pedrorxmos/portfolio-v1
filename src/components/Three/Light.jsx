function Light() {
	return (
		<>
			<directionalLight color="hsl(60, 10%, 96%)" intensity={0.6} position={[0, 0.1, 1]} />
		</>
	);
}

export default Light;
