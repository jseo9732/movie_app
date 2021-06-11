import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function  App() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/about/:id" component={About} />
        </BrowserRouter>
    );
}

export default App;