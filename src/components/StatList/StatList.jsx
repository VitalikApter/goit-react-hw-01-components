import PropTypes from 'prop-types';
import css from './StatList.module.css';
import StatItem from 'components/StatItem/StatItem';

const StatList = ({stats}) => {
    return (
  <ul className={css.list}>
    {stats.map(({id, label, percentage}) => (
        <StatItem key={id} label={label} percentage={percentage}></StatItem>
        
    ))}
  </ul>

    );
};

export default StatList;

StatList.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };