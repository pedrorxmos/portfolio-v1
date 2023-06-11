import { useEffect, useState } from 'react';
import './Cursor.scss';

function Cursor() {
	const [pointer, setPointer] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

	useEffect(() => {
		window.addEventListener('mousemove', (e) => {
			setPointer({ x: e.pageX, y: e.pageY });

			document.querySelectorAll('.cursor-target').forEach((element) => {
				element.addEventListener('mouseenter', () => {
					document.querySelector('.cursor-dot').style.transform = `scale(2)`;
				});

				element.addEventListener('mouseleave', () => {
					document.querySelector('.cursor-dot').style.transform = `scale(1)`;
				});
			});
		});
	});

	return (
		<>
			<div className="cursor" style={{ transform: `translate(${pointer.x}px, ${pointer.y}px) translate(-50%, -50%)` }}>
				<div className="cursor-dot"></div>
			</div>
		</>
	);
}

export default Cursor;
