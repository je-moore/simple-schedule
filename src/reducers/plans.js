export default (state = null, action) => {
  switch (action.type) {
    case 'SET_PLANS':
      return action.payload.reduce((accumulator, currentValue) => {
        accumulator[currentValue.day] = currentValue.text
        return accumulator
      }, new Array(31))
    default:
      return state
  }
}
