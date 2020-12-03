export const SWITCH_NAME = 'SWITCH_NAME'

// dispatch actions
export const switchName = NameContact => {
  return dispatch => {

    dispatch({
      type: SWITCH_NAME,
      NameContact: NameContact
    })
  }
}