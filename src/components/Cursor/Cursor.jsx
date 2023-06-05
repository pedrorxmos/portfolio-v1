import './Cursor.scss';

function Cursor() {
	window.addEventListener('mousemove', (e) => {
		document.querySelector('.cursor').style.transform = `translate(${e.pageX}px, ${e.pageY}px) translate(-50%, -50%)`;

		document.querySelectorAll('.cursor-target').forEach((element) => {
			element.addEventListener('mouseenter', () => {
				document.querySelector('.cursor-dot').style.transform = `scale(2)`;
			});

			element.addEventListener('mouseleave', () => {
				document.querySelector('.cursor-dot').style.transform = `scale(1)`;
			});
		});
	});

	return (
		<>
			<div className="cursor" style={{ transform: `translate(${window.innerWidth / 2}px, ${window.innerHeight / 2}px) translate(-50%, -50%)` }}>
				<div className="cursor-dot"></div>
			</div>
		</>
	);
}

export default Cursor;
