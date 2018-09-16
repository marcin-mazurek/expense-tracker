import generateGuid from '../../utils/generateGuid';

import { ADD_TRANSACTION, REMOVE_TRANSACTION, CHANGE_TRANSACTION, CHANGE_NEW_TRANSACTION_FIELD } from './constants';

export function addTransaction({ description, category, value }) {
  return {
    type: ADD_TRANSACTION,
    payload: {
      id: generateGuid(),
      description,
      category,
      value,
    },
  };
}

export function removeTransaction(id) {
  return {
    type: REMOVE_TRANSACTION,
    payload: id,
  };
}

export function changeTransaction(id, { description, category, value }) {
  return {
    type: CHANGE_TRANSACTION,
    payload: {
      id,
      data: { description, category, value },
    },
  };
}

export function changeNewTransactionField(field, value) {
  return {
    type: CHANGE_NEW_TRANSACTION_FIELD,
    payload: { field, value },
  };
}
