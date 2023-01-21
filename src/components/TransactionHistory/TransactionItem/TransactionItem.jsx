import PropTypes from 'prop-types';
import css from './TransactionItem.module.css'


const TransactionItem = ({type, amount, currency,}) => {
    return (
        <tr className={css.item}>
    <td>{type}</td>
    <td>Number({amount})</td>
    <td>{currency}</td>
  </tr>
    )
};

export default TransactionItem;

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    };