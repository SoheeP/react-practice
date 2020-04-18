import * as types from './../actions/ActionTypes';

// 초기상태 정하기
const initailState = {
  number: 0,
};

export default function counter(state = initailState, action){
  // if(typeof state === 'undefined'){
  //   return initailState
  // } > 기본인수 문법과 동일함

  // else.... 
  switch(action.type){
    case types.INCREMENT: 
    // 새로운 값만 추가한다.
      return { ...state, number: state.number + 1 };
    case types.DECREMENT:
      return { ...state, number: state.number - 1}
    default: 
      return state;
  };
}