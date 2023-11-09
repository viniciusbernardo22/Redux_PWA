import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from './store/contador';
import { State } from './models/state';


function App() {
  const dispatch = useDispatch();

  const {contador} = useSelector<State, any>((state) => state);

  return (
    <div>
      <h1>Total: {contador}</h1>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
    </div>
  );
}

export default App;
