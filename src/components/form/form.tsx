import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from '../../store/login';
import { requestDogAPI } from '../../models/dogApi';
import { AnyAction } from 'redux';

export function Form() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { data } = useSelector<any, any>((state) => state.login);

  const style = {
    display: 'block',
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const body = { username, password } as requestDogAPI;
    dispatch<any>(fetchToken(body));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label style={style} htmlFor='username'>
        Usuário
      </label>
      <input
        type='text'
        id='username'
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label style={style} htmlFor='password'>
        Senha
      </label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button style={style} type='submit'>
        Enviar
      </button>

    </form>
  );
}
