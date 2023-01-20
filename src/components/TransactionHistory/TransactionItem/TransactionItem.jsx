import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';


const TransactionItem = ({type, amount, currency, rowColor}) => {
    return (
        <tr>
    <td className={css.rowColor}>{type}</td>
    <td className={css.rowColor}>{amount}</td>
    <td className={css.rowColor}>{currency}</td>
  </tr>
    )
};

export default TransactionItem;

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    rowColor: PropTypes.string,
}