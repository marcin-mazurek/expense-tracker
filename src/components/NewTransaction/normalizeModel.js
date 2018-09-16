const parseValue = value => {
  try {
    return Number.parseFloat(value) || 0;
  } catch (error) {
    console.error(
      'An unexpected error occured while trying to parse value: ' + value.toString() + '. Error: ' + error.message,
    );
    return 0;
  }
};

export default function normalizeModel(transaction) {
  return {
    ...transaction,
    value: parseValue(transaction.value),
  };
}
