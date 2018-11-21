import { ADD_TRANSACTION, CHANGE_NEW_TRANSACTION_FIELD } from '../constants';

const newTransactionInitialFields = {
  value: '',
  description: '',
  category: 'Other',
};

const allowedFields = ['value', 'description', 'category'];

export default function newTransactionReducer(fields = newTransactionInitialFields, action = {}) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return newTransactionInitialFields;

    case CHANGE_NEW_TRANSACTION_FIELD:
      if (!allowedFields.includes(action.payload.field)) {
        return fields;
      }

      return {
        ...fields,
        [action.payload.field]: action.payload.value,
      };

    default:
      return fields;
  }
}
