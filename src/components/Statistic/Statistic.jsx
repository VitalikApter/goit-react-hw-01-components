import PropTypes from 'prop-types';
import StatList from "components/StatList/StatList";
import css from './Statistic.module.css'

const Statistic = ({title, stats}) => {
    return (
        <section className={css.section}>
            {title && <h2 className={css.title}>Upload stats</h2>}
            <StatList stats={stats} />
        </section>
    )
}

export default Statistic;

Statistic.propTypes= {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ),
}