import './Cursor.scss';

function Cursor() {
	window.addEventListener('mousemove', (e) => {
		document.querySelector('.cursor').style.transform = `translate(${e.pageX}px, ${e.pageY}px) translate(-50%, -50%)`;

		document.querySelectorAll('.btn').forEach((element) => {
			element.addEventListener('mouseenter', () => {
				document.querySelector('.cursor-dot').style.transform = `scale(2)`;
			});

			element.addEventListener('mouseleave', () => {
				document.querySelector('.cursor-dot').style.transform = `scale(1)`;
			});
		});

		document.querySelectorAll('.link').forEach((element) => {
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
			<div className="cursor">
				<div className="cursor-dot"></div>
			</div>
		</>
	);
}

export default Cursor;
