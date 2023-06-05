import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProjectButton.scss';
import Icon from '../Icon/Icon';

function ProjectButton({ id, title, tags, img }) {
	const selectedWork = document.querySelector('.selected-work');

	const onMouseEnter = () => {
		selectedWork.style.backgroundImage = `url('/img/${img}.webp')`;
		selectedWork.classList.add('open');
	};

	const onMouseLeave = () => {
		// selectedWork.style.backgroundImage = `url('/img/blank.webp')`;
		selectedWork.classList.remove('open');
	};

	return (
		<>
			<Link to={`/work/${id}`} className="cursor-target project-button" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				<Icon title={`go to ${title}`} name="arrow-left" size="x-normal" />
				<div className="project__info">
					<h2 className="h3">{title}</h2>
					<div className="project__tags">
						{tags.map((tag, index) => (
							<div key={index} className="project__tag" style={{ '--tag-color': tag.color }}>
								<Icon title="hash" name="hash" size="x-small" />
								{tag.tag}
							</div>
						))}
					</div>
				</div>
			</Link>
		</>
	);
}

export default ProjectButton;

ProjectButton.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	img: PropTypes.string.isRequired,
};
