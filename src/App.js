import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { IntlProvider } from "react-intl";
import NotificationSystem from "react-notification-system";
// Components
import Header from "./HeaderFront";
import Topbar from "./Topbar";
import Footer from "./Footer";

const firebaseConfig = {
  apiKey: "AIzaSyBiHcEsVxy71tAzIYrQG4OBrVWmXmQ3cDQ",
  authDomain: "realstate-muhammadhany.firebaseapp.com",
  projectId: "realstate-muhammadhany",
  storageBucket: "realstate-muhammadhany.appspot.com",
  messagingSenderId: "169374271191",
  appId: "1:169374271191:web:8a837376e24199006f1292",
  measurementId: "G-ZF8NGB03Y3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const AppContext = React.createContext();

// Placeholder components for demonstration
const LoggedInView = () => <div>Welcome, User!</div>;
const LoggedOutView = () => <div>Please Log In</div>;

const App = ({ children, params }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const notificationRef = useRef();
  const lang = params.lang;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    // Example Firestore query
    const docRef = doc(db, "collectionName", "documentId");
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  const messages = {
    // Your localization messages
  };
  const localeData = messages[lang];

  const contextValue = {
    lang,
    user: auth.currentUser,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <IntlProvider {...localeData} defaultLocale="ar">
        <div className={localeData.className}>
          <NotificationSystem ref={notificationRef} />
          <Topbar />
          <Header />
          {/* Conditional rendering based on loggedIn */}
          {loggedIn ? <LoggedInView /> : <LoggedOutView />}
          <section>{children}</section>
          <Footer lang={lang} />
        </div>
      </IntlProvider>
    </AppContext.Provider>
  );
};

App.propTypes = {
  children: PropTypes.node,
  params: PropTypes.shape({
    lang: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
