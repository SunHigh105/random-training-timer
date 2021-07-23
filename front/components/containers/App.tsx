import React, { useState, useEffect, FC } from 'react';
import { getUser, logout } from '../../services/signin';
import { App } from '../App';

export const AppContainer: FC =() => {
  const [user, setUser] = useState({ user_id: '', name: '' });

  const getUserInfo = async () => {
    const res = await getUser();
    setUser({ user_id: res.id, name: res.name });
  };

  const handleLogout = async () => {
    const res = await logout();
    if (res.isError) {
      alert ('Logout Failed.');
      return;
    }
    if (res.status === 200) {
      setUser({ user_id: '', name: '' });
      location.href = '/';
    }
  };

  // ログイン済みか判定
  // 第二引数に[getUser]を設定すると何度もgetUserInfo()が実行されてしまう
  useEffect(() => {
    getUserInfo();
  }, []);
  
  return (
    <App user={user} isLoggedIn={user.user_id !== '' && user.name !== ''} handleLogout={handleLogout} />
  );
}
