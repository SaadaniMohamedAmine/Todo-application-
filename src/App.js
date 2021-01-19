import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import TodoApp from "./TodoApp";
import Contact from "./Contact";

function App() {
  const todos = useSelector((state) => state.todosReducer);
  console.log(todos);
  return (
    <div className="main-page">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={TodoApp} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
