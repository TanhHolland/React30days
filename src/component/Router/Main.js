import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    Outlet,
  } from "react-router-dom";
  
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
            <Link to="blog1">Blog 1</Link>
          </li>
          <li>
            <Link to="blog2">Blog 2</Link>
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
        <Link to=".."><h1>Cancel</h1></Link>
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
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
  