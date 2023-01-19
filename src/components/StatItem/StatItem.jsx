import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import css from './StatItem.module.css';

const StatItem = ({ label, percentage }) => {
  const randomColor = getRandomHexColor();
    return (
        <li className={css.item}
        style={{ backgroundColor: randomColor }}>
      <span className={css.label}>{label}</span><br />
      <span className={css.percentage}>{percentage}%</span>
    </li>
    )
}

export default StatItem;

StatItem.propTypes= {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
}