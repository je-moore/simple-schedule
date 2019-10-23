export default (state = null, action) => {
  switch (action.type) {
    case 'SET_PLANS':
      return action.payload
    default:
      return state
  }
}
