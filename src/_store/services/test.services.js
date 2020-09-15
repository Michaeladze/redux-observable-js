import { map } from 'rxjs/operators';
import Axios from 'axios-observable';

/** Get Test */
export const getTest = () => {
  return Axios.get(`https://jsonplaceholder.typicode.com/todos/1`).pipe(map(({ data }) => data));
};
