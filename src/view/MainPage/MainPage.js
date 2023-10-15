import React, { useContext } from 'react';
import LoginPage from './LoginPage';
import CharacterList from '../CharacterList/CharacterList';
import { AuthContext } from '../../service/AuthContext.';

const MainPage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn ? <CharacterList /> : <LoginPage />}
    </div>
  );
}

export default MainPage;