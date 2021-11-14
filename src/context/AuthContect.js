import React, {useContext, useState, useEffect} from "react";

import {auth} from "../firebase";

const AutherContext = React.createContext();

export function useAuth() {
  return useContext(AutherContext);
}

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function singup(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    singup,
  };

  return (
    <AutherContext.Provider value={value}>
      {props.children}
    </AutherContext.Provider>
  );
};
