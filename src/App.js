import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
