  import * as types from '../actions/actionTypes';
  import initialState from './initialState';

  function actionTypeEndsInSuccess(type) {
      return type.substring(type.length - 8) == '_SUCCESS';
  }

  export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
        if (action.type == types.BEGIN_AJAX_CALL) {
            state = state + 1;
            console.log(action.type + state);
            return state;
      } else if (action.type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
            state = state - 1;
            console.log(action.type + state);
            return state;
            
      }
      return state;
  }