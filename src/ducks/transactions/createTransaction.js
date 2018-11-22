import generateGuid from '../../utils/generateGuid';

export default function createTransaction({ description, category, value }) {
  return {
    id: generateGuid(),
    description,
    category,
    value,
  };
}