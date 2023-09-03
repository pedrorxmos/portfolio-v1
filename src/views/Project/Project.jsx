import { Link, useParams } from 'react-router-dom';

// import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import './Project.scss';
import { useCollection, useDoc } from '../../hooks/firestore';
import Icon from '../../components/Icon/Icon';
import { useContext } from 'react';
import { LocaleContext } from '../../providers/LocaleContext';

function Project() {
	const id = useParams().id;
	const { locale } = useContext(LocaleContext);
	const work = useCollection(locale.locale['firebase-projects']);
	const data = useDoc(locale.locale['firebase-projects'], id);

	const nextProject = work?.sort((a, b) => a.order - b.order)[data?.order === work.length - 1 ? 0 : data?.order + 1];
	const previousProject = work?.sort((a, b) => a.order - b.order)[
		data?.order === 0 ? work.length - 1 : data?.order - 1
	];

	return (
		<>
			<main className="project-detail main">
				<div className="detail__actions">
					<Link to="/work" className="action cursor-target btn">
						<Icon title="arrow-left" name="arrow-left" size="medium" />
						<span>{locale.locale['project-back-button']}</span>
					</Link>

					<div className="actions__other">
						<Link to={`/work/${previousProject?.NO_ID_FIELD}`} className="action cursor-target btn">
							<Icon title="arrow-left" name="arrow-left" size="medium" />
							<span>{locale.locale['project-previous-button']}</span>
						</Link>
						<Link to={`/work/${nextProject?.NO_ID_FIELD}`} className="action cursor-target btn">
							<span>{locale.locale['project-next-button']}</span>
							<Icon title="arrow-right" name="arrow-right" size="medium" />
						</Link>
					</div>
				</div>
				<div className="detail__section">
					<div className="detail__img">{data && <img src={data.img} alt={`${data?.title} image`} />}</div>

					<div className="detail__info">
						<div className="info__title">
							<h1>{data?.title}</h1>
							<div className="info__tags">
								{data?.tags.map((tag, index) => (
									<div key={index} className="info__tag" style={{ '--tag-color': tag.color }}>
										<Icon title="hash" name="hash" size="x-small" />
										{tag.tag}
									</div>
								))}
							</div>
						</div>
						<p className="info__description">{data?.description}</p>
						<div className="info__actions">
							<Button
								type="link"
								action={data?.demo}
								value={locale.locale['project-demo']}
								color="main"
								leftIcon="external-link"
								size="medium"
							/>
							{data?.code && (
								<Button
									type="link"
									action={data?.code}
									value={locale.locale['project-code']}
									color="secondary"
									leftIcon="github"
									size="medium"
								/>
							)}
						</div>
					</div>
				</div>

				<div className="detail__section">
					<div className="detail__card">
						<Icon title="details" name="sparkle" size="x-big" />
						<div className="card__info">
							<h2 className="h3">{locale.locale['project-details']}</h2>
							<span>
								<small>{locale.locale['project-category']}:</small> {data?.category}
							</span>
							<span>
								<small>{locale.locale['project-year']}:</small> {data?.year}
							</span>
							{data?.details.map((det, index) => (
								<span key={index}>
									<small>{det.title}:</small>
									{det.url ? (
										<a href={det.url} alt="project design url" target="_blank">
											{` ${det.value}`}
											<Icon name="external-link" size="x-small" title="link to design" />
										</a>
									) : (
										` ${det.value}`
									)}
								</span>
							))}
						</div>
					</div>
					<div className="detail__card">
						<Icon title="tools" name="tools" size="x-big" />
						<div className="card__info">
							<h2 className="h3">{locale.locale['project-tools']}</h2>
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

			{/* <Footer /> */}
		</>
	);
}

export default Project;
