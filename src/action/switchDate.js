export const SWITCH_DATE = 'SWITCH_DATE'

// dispatch actions
export const switchDate = SwitchDate => {
  return dispatch => {

    dispatch({
      type: SWITCH_DATE,
      SwitchDate: SwitchDate
    })
  }
}