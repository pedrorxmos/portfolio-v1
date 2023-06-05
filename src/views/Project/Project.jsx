import { Link, useParams } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import './Project.scss';
import SvgHash from '../../icons/Hash';
import SvgHeart from '../../icons/Heart';
import SvgArrowLeft from '../../icons/ArrowLeft';
import SvgArrowRight from '../../icons/ArrowRight';
import { useCollection, useDoc } from '../../hooks/getFirestore';

function Project() {
	const id = useParams().id;

	const work = useCollection('projects');
	const data = useDoc('projects', id);

	const nextProject = work?.sort((a, b) => a.order - b.order)[data?.order === work.length - 1 ? 0 : data?.order + 1];
	const previousProject = work?.sort((a, b) => a.order - b.order)[data?.order === 0 ? work.length - 1 : data?.order - 1];

	return (
		<>
			<main className="project-detail main">
				<div className="detail__actions">
					<Link to="/work" className="action cursor-target">
						<SvgArrowLeft title="arrow" />
						back
					</Link>

					<div className="actions__other">
						<Link to={`/work/${previousProject?.NO_ID_FIELD}`} className="action cursor-target">
							<SvgArrowLeft title="arrow" />
							previous
						</Link>
						<Link to={`/work/${nextProject?.NO_ID_FIELD}`} className="action cursor-target">
							next
							<SvgArrowRight title="arrow" />
						</Link>
					</div>
				</div>
				<div className="detail__section">
					<div className="detail__img">{data && <img src={`/img/${data?.img}.webp`} alt={`${data?.title} image`} />}</div>

					<div className="detail__info">
						<div className="info__title">
							<h1>{data?.title}</h1>
							<div className="info__tags">
								{data?.tags.map((tag, index) => (
									<div key={index} className="info__tag" style={{ '--tag-color': tag.color }}>
										<SvgHash title="hash icon" size="x-small" />
										{tag.tag}
									</div>
								))}
							</div>
						</div>
						<p className="info__description">{data?.description}</p>
						<div className="info__actions">
							<Button type="link" action={data?.demo} value="demo" color="main" icon="external-link" size="medium" />
							<Button type="link" action={data?.code} value="code" color="secondary" icon="github" size="medium" />
						</div>
					</div>
				</div>

				<div className="detail__section">
					<div className="detail__card">
						<SvgHeart size="x-big" title="tools" />
						<div className="card__info">
							<h2 className="h3">Details</h2>
							<span>
								<small>category:</small> e-commerce
							</span>
							<span>
								<small>year:</small> {data?.year}
							</span>
							<span>
								<small>design:</small> {data?.design.value}
							</span>
						</div>
					</div>
					<div className="detail__card">
						<SvgHeart size="x-big" title="tools" />
						<div className="card__info">
							<h2 className="h3">Tools used</h2>
							<div className="detail__tools">
								{data?.tools.map((tool, index) => (
									<span key={index} className="detail__tool">
										{tool}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}

export default Project;
