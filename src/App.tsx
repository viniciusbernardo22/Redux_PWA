import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from './store/contador';
import { State } from './models/state';
import { abrir, fechar } from './store/modal';

import './index.css'
import { Form } from './components/form/form';

function App() {
  return (
    <div>
     <Form></Form>
    </div>
  );
}

export default App;
