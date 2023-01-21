import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem/TransactionItem';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
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
    {items.map(({id, type, amount, currency}) => (
      <TransactionItem key={id} type={type} amount={amount} currency={currency}></TransactionItem>
    ))}
    
  </tbody>
</table>
    );
};



export default TransactionHistory;

TransactionHistory.propTypes = {
    props: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.number.isRequired,
          currency: PropTypes.number.isRequired,
        })
      ),
    }),
  };

