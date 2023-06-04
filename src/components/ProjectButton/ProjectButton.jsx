import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SvgArrowLeft from '../../icons/ArrowLeft';
import SvgHash from '../../icons/Hash';
import './ProjectButton.scss';

function ProjectButton({ id, title, tags, img }) {
	const onMouseEnter = () => {
		document.querySelector('.selected-work').style.backgroundImage = `url('/img/${img}.webp')`;
	};

	const onMouseLeave = () => {
		document.querySelector('.selected-work').style.backgroundImage = `url('/img/blank.webp')`;
	};

	return (
		<>
			<Link to={`/work/${id}`} className="cursor-target project-button" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				<SvgArrowLeft size="x-normal" title={`go to ${title}`} />
				<div className="project__info">
					<h2 className="h3">{title}</h2>
					<div className="project__tags">
						{tags.map((tag, index) => (
							<div key={index} className="project__tag" style={{ '--tag-color': tag.color }}>
								<SvgHash title="hash icon" size="x-small" />
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
