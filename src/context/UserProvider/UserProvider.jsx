import React, { createContext, useState, useContext, useEffect } from "react";
import "./UserProvider.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../container/Routes";
import firebase, { authProvider } from "../../firebase";
import NavBar from "../../components/NavBar";

export const UserContext = createContext({});

const UserProvider = () => {
  const [user, setUser] = useState(null);

  const signIn = () => {
    firebase.auth().signInWithRedirect(authProvider);
  };

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      console.log("User logged out");
    }).catch((error) => {
      
    });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  };

  useEffect(() => {
    getUser();
  }, []);


  const contextData = {
    user,
    signIn,
    signOut,
  };

  return (
    <UserContext.Provider value={contextData}>
        <Router>
          <NavBar />
          <Routes />
        </Router>
    </UserContext.Provider>
  );
};

export default UserProvider;
