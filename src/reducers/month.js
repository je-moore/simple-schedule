export default (state = null, action) => {
  switch (action.type) {
    case 'SET_MONTH':
      return action.payload
    default:
      return state
  }
}
