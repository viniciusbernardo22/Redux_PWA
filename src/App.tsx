import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from './store/contador';
import { Counter } from './models/state';


function App() {
  const dispatch = useDispatch();

  const state: Counter = useSelector<Counter, Counter>((state) => state);

  console.log(state);
  return (
    <div>
      <h1>Total: {state.contador.total}</h1>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
    </div>
  );
}

export default App;
