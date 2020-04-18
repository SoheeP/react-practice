// import { INCREMENT, DECREMENT, SET_COLOR } from './ActionTypes';
import * as types from './ActionTypes';

// action만 불러왔을 때 이 파일의 내용을 불러올 수 있도록 한다

// 액션 생성자 함수 - camelCase로 적어주기
export function increment () {
  return {
    type: types.INCREMENT
  };
}
export function decrement () {
  return {
    type: types.DECREMENT
  };
}
export function setColor (color) {
  return {
    type: types.SET_COLOR,
    color
  };
}