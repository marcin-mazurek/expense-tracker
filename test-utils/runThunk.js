export default function runThunk(thunk, ...args) {
  const dispatch = jest.fn();
  return thunk(...args)(dispatch).then(() => Promise.resolve(dispatch));
}
