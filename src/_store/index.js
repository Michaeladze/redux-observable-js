import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getTestEffect$ } from './effects/test.effects';
import testReducer from './reducers/test.reducer';

/*[imports:end] */

const observableMiddleware = createEpicMiddleware();

/** Регистрируем редьюсеры */
const reducers = combineReducers({
  test: testReducer, 

  /*[reducers:end] */
})

/** Создаем store */
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(observableMiddleware)));

/** Регистрируем эффекты */
// @ts-ignore
observableMiddleware.run(combineEpics(
  getTestEffect$, 
  
  /*[effects:end] */
  )
);
