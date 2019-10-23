export default (state = -1, action) => {
  switch (action.type) {
    case 'SET_EDITING':
      return action.payload
    default:
      return state
  }
}
