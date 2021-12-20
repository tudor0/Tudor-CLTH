import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route component={HomePage} path={"/"} exact />
        <Route component={ShopPage} path={"/shop"} />
        <Route path={"/topics/:topicId"} component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
