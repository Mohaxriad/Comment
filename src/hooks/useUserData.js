import { useState, useEffect } from 'react';

export const useUserData = () => {
  const [userData, setUserData] = useState({ user: null, accessToken: null });

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return userData;
}
