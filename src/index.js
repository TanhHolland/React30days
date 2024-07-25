import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from "react-router-dom";
const Home = (props) => {
    return <h1>Home</h1>;
};

const App = () => {
    return (
        <Router>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" component={Home} />
            </Routes>
        </Router>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
