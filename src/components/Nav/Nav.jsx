import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./nav_style.css";
import { logout_user } from "../../actions/login.action";
const Navcmpt = () => {
  const { isLogin } = useSelector((state) => state.token_data);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout_user());
  };
  return (
    <Navbar expand="lg" className="navContainer">
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto">
            {isLogin ? (
              <>
                {console.log(isLogin)}
                <Nav.Link as={Link} to="/">
                  Deshboard
                </Nav.Link>
                <Nav.Link as={Link} onClick={handleLogout}>
                  LogOut
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/logIn">
                  LogIn
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navcmpt;
