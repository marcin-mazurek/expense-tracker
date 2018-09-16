import PropTypes from 'prop-types';

const transactionTypeBase = {
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export const transactionType = PropTypes.shape({
  ...transactionTypeBase,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}).isRequired;

export const newTransactionType = PropTypes.shape({
  ...transactionTypeBase,
  value: PropTypes.string.isRequired, // before validating and converting
}).isRequired;
