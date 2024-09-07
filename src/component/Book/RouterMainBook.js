import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import UserPage from "./pages/user";
import Book from "./pages/book";
import Register from "./pages/register";
import Login from "./pages/login";
import MainBook from "./MainBook";
import { AuthContextUser } from "./context/auth.context";
import Error from "./pages/error"
const ProtectedRoute = ({ user, children }) => {
    if (!user) {
        return <Error></Error>;
    }
    return children;
};
const RouterMainBook = () => {
    const { user } = React.useContext(AuthContextUser);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainBook></MainBook>}>
                    <Route index element={<Home></Home>}></Route>
                    <Route
                        path="/user"
                        element={
                            <ProtectedRoute user={user}>
                                <UserPage></UserPage>
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route
                        path="/book"
                        element={
                            <ProtectedRoute user={user}>
                                <Book></Book>
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route
                        path="/register"
                        element={<Register></Register>}
                    ></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Route>
            </Routes>
        </Router>
    );
};
export default RouterMainBook;
