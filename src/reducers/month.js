export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_MONTH':
      return action.payload
    case 'SET_PLANS':
      const plans = action.payload.reduce((accumulator, currentValue) => {
        accumulator[currentValue.day] = currentValue.text
        return accumulator
      }, new Array(31))
      // return state
      return { ...state, plans: plans }
    default:
      return state
  }
}
