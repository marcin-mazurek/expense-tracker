import { connect } from 'react-redux';
import { getAllTransactions, getNewTransaction } from '../../ducks/transactions/selectors';
import { removeTransaction, changeNewTransactionField, addTransaction } from '../../ducks/transactions/actions';
import TransactionList from './TransactionList';

const mapStateToProps = state => ({
  allTransactions: getAllTransactions(state),
  newTransaction: getNewTransaction(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove(id) {
    dispatch(removeTransaction(id));
  },
  onNewTransactionFieldChange(field, value) {
    dispatch(changeNewTransactionField(field, value));
  },
  onNewTransactionSave(transaction) {
    dispatch(addTransaction(transaction));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionList);
