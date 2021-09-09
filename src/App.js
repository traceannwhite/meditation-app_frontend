import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";

function App() {
  const url = "https://meditation-app-tw.herokuapp.com/timer/";

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Main {...routerProps} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
