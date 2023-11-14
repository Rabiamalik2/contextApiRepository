import React from 'react';

const defaultValue = {
  val: 0,
  val1: 1,
  val2: 2,
  user: {
    name: '',
    phone: '',
    email: '',
    password: '',
  },
  isLoggedin: false,
  setUser: () => {},
}; // Define a default value

const PracContext = React.createContext(defaultValue);

const PracProvider = ({children}) => {
  const [val, setVal] = React.useState(0);
  const [val1, setVal1] = React.useState(1);
  const [val2, setVal2] = React.useState(2);
  const [user, setUser] = React.useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [isLoggedin, setIsLoggedIn] = React.useState(false);
  const register = payload => {
    console.log('global', payload);
    setUser(payload);
  };
  return (
    <PracContext.Provider
      value={{
        val,
        setVal,
        val1,
        setVal1,
        val2,
        setVal2,
        user,
        setUser,
        isLoggedin,
        setIsLoggedIn,
        register,
      }}>
      {children}
    </PracContext.Provider>
  );
};

export {PracContext, PracProvider};
