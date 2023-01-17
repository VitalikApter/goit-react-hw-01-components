import PropTypes from 'prop-types';
import css from './StatItem.module.css';

const StatItem = ({ label, percentage }) => {
    return (
        <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
    )
}

export default StatItem;

StatItem.propTypes= {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.string.isRequired,
}