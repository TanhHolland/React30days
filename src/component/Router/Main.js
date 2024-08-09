import {
    BrowserRouter as Router,
    Route,
    Routes,
    Outlet,
    NavLink,
} from "react-router-dom";
import "./style.css";
const Home = () => {
    return <h1>Home</h1>;
};

const About = () => {
    return <h1>About</h1>;
};

const Blogs = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="blog1">Blog 1</NavLink>
                </li>
                <li>
                    <NavLink to="blog2">Blog 2</NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

const Blog1 = () => {
    return (
        <>
            <h1>Blog1</h1>
            <NavLink to="..">
                <h1>Cancel</h1>
            </NavLink>
        </>
    );
};

const Blog2 = () => {
    return <h1>Blog 2</h1>;
};

const Nopage = () => {
    return <h1>No page</h1>;
};

const Layout = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending, isTransitioning }) =>
                            [
                                isPending ? "pending" : "",
                                isActive ? "active" : "",
                                isTransitioning ? "transitioning" : "",
                            ].join(" ")
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending, isTransitioning }) =>
                            [
                                isPending ? "pending" : "",
                                isActive ? "active" : "",
                                isTransitioning ? "transitioning" : "",
                            ].join(" ")
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/blogs"
                        className={({ isActive, isPending, isTransitioning }) =>
                            [
                                isPending ? "pending" : "",
                                isActive ? "active" : "",
                                isTransitioning ? "transitioning" : "",
                            ].join(" ")
                        }
                        end
                    >
                        Blogs
                    </NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="blogs" element={<Blogs />}>
                        <Route path="blog1" element={<Blog1 />} />
                        <Route path="blog2" element={<Blog2 />} />
                    </Route>
                    <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Main;
