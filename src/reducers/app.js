const initialState = {
  menu: []
}

const app = (state = initialState , {payload, type}) => {
  switch (type) {
    case 'SET_MENU':
      return {
        ...state,
        menu: payload.menu
      }
    default:
      return state
  }
}

export default app
