import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem/TransactionItem';
import css from './TransactionHistory.module.css';

const TransactionHistory = props => {
    return (
        <table className={css.history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {props.items.map((transaction, index) => (
        <TransactionItem key={transaction.id} {...transaction}
        rowColor={index % 2 ? 'light' : 'dark' }/>
    ))}
  </tbody>
</table>
    );
};



export default TransactionHistory;

TransactionHistory.propTypes = {
    props: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        })
      ),
    }),
  };

