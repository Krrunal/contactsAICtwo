export const SWITCH_CONTACT = 'SWITCH_CONTACT'

// dispatch actions
export const switchContact = BaseContact => {
  return dispatch => {

    dispatch({
      type: SWITCH_CONTACT,
      BaseContact: BaseContact
    })
  }
}