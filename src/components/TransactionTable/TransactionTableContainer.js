import { connect } from 'react-redux';
import { getAllTransactions, getNewTransaction } from '../../ducks/transations/selectors';
import { removeTransaction, changeNewTransactionField, addTransaction } from '../../ducks/transations/actions';
import TransactionTable from './TransactionTable';

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
)(TransactionTable);
