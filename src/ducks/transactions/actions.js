import {
  LOAD_TRANSACTIONS_REQUEST,
  LOAD_TRANSACTIONS_SUCCESS,
  LOAD_TRANSACTIONS_ERROR,
  ADD_TRANSACTION_REQUEST,
  ADD_TRANSACTION_SUCCESS,
  ADD_TRANSACTION_ERROR,
  REMOVE_TRANSACTION_REQUEST,
  REMOVE_TRANSACTION_SUCCESS,
  REMOVE_TRANSACTION_ERROR,
  CHANGE_TRANSACTION_REQUEST,
  CHANGE_TRANSACTION_SUCCESS,
  CHANGE_TRANSACTION_ERROR,
  CHANGE_NEW_TRANSACTION_FIELD,
} from './constants';

export function loadTransactionsRequest() {
  return {
    type: LOAD_TRANSACTIONS_REQUEST,
  };
}

export function loadTransactionsSuccess(transactions) {
  return {
    type: LOAD_TRANSACTIONS_SUCCESS,
    payload: transactions,
  };
}

export function loadTransactionsError() {
  return {
    type: LOAD_TRANSACTIONS_ERROR,
  };
}

export function addTransactionRequest(transaction) {
  return {
    type: ADD_TRANSACTION_REQUEST,
    payload: transaction,
  };
}

export function addTransactionSuccess(transaction) {
  return {
    type: ADD_TRANSACTION_SUCCESS,
    payload: transaction,
  };
}

export function addTransactionError(transaction) {
  return {
    type: ADD_TRANSACTION_ERROR,
    payload: transaction,
  };
}

export function removeTransactionRequest(id) {
  return {
    type: REMOVE_TRANSACTION_REQUEST,
    payload: id,
  };
}

export function removeTransactionSuccess(id) {
  return {
    type: REMOVE_TRANSACTION_SUCCESS,
    payload: id,
  };
}

export function removeTransactionError(id) {
  return {
    type: REMOVE_TRANSACTION_ERROR,
    payload: id,
  };
}

export function changeTransactionRequest(id, data) {
  return {
    type: CHANGE_TRANSACTION_REQUEST,
    payload: { id, data },
  };
}

export function changeTransactionSuccess(id, data) {
  return {
    type: CHANGE_TRANSACTION_SUCCESS,
    payload: { id, data },
  };
}

export function changeTransactionError(id, data) {
  return {
    type: CHANGE_TRANSACTION_ERROR,
    payload: { id, data },
  };
}

export function changeNewTransactionField(field, value) {
  return {
    type: CHANGE_NEW_TRANSACTION_FIELD,
    payload: { field, value },
  };
}
