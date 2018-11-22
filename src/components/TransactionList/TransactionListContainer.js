import { connect } from 'react-redux';
import { getAllTransactions, getNewTransaction } from '../../ducks/transactions';
import { removeTransactionRequest, changeNewTransactionField, addTransaction, loadTransactions } from '../../ducks/transactions';
import TransactionList from './TransactionList';

const mapStateToProps = state => ({
  allTransactions: getAllTransactions(state),
  newTransaction: getNewTransaction(state),
});

const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(loadTransactions())
  },
  onRemove(id) {
    dispatch(removeTransactionRequest(id));
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
