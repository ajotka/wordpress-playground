import classNames from 'classnames';
import css from './style.module.css';

export function TimelineNode({ symbol, title, isActive, isDone, children }) {
	const classes = classNames(
		css.timelineNode,
		{
			[css.timelineNodeActive]: isActive,
			[css.timelineNodeDone]: isDone,
		}
	);

	return (
		<div className={classes}>
			<div className={css.timelineNode__header}>
				<span>{ symbol }</span>
				<h2>{ title }</h2>
			</div>
			<div className={css.timelineNode__content}>
				{ children }
			</div>
		</div>
	);
}
