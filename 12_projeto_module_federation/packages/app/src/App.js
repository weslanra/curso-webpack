import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

// CSS
import "./app.css";

const App = () => {
  // MF
  const HomePage = React.lazy(() =>
    import("HomeApp/HomePage").then((module) => module.default)
  );
  // const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          {/* <Route exact path="/contact">
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage></ContactPage>
            </Suspense>
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
