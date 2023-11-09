import { createAction } from '@reduxjs/toolkit';

export const incrementar = createAction('INCREMENTAR');
export const reduzir = createAction('REDUZIR');

const contador = (state = 0, action: any) => {
  switch (action.type) {
    case incrementar.type:
      return state + 1;
    case reduzir.type:
      return state - 1;
    default:
      return state;
  }
};

export default contador;
