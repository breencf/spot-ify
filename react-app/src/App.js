import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/TopBar/auth/LoginForm";
import SignUpForm from "./components/TopBar/auth/SignUpForm";
import NavBar from "./components/NavBar";
import { authenticate } from "./store/session";
import { AudioPlayer } from "./components/AudioPlayer";
import MainInfo from "./components/MainInfo";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  window.ui = 'ui';

  return (
    <>
      <BrowserRouter>
        <div id="top">
          <NavBar />
          <Switch>
            <Route path="/login" exact={true}>
              <LoginForm />
            </Route>
            <Route path="/signup" exact={true}>
              <SignUpForm />
            </Route>
            <MainInfo />
          </Switch>
        </div>
        <AudioPlayer />
      </BrowserRouter>
    </>
  );
}

export default App;
