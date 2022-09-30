import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setError } from "../actions/login.action";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const LogIn = () => {
  const dispatch = useDispatch();
  const { isError, isLogin, errormessage } = useSelector(
    (state) => state.token_data
  );
  const nevigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string()
      .matches(/^(\S+$)/g, "This field cannot contain only blankspaces")
      .email("Invalid email format")
      .required("Email is a required "),
    password: Yup.string()
      .required("Password is a required ")
      .min(8, "Password must be at least 8 characters"),
  });
  useEffect(() => {
    if (isError) {
      toast.error(`${errormessage}`, {
        position: "top-right",
      });
      dispatch(setError());
    }
  }, [isError]);

  useEffect(() => {
    if (isLogin) {
      nevigate("/");
    }
  }, [isLogin]);

  const handleDispatch = (value) => {
    dispatch(loginUser(value));
  };
  return (
    <>
      <ToastContainer />
      <Container className="flex mt-5">
        <Row className="justify-content-center">
          <Col lg={4} sm={6}>
            <Card>
              <Card.Header>LogIn</Card.Header>
              <Card.Body>
                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={(
                    values,
                    { setSubmitting, resetForm, setErrors }
                  ) => {
                    // console.log(values);
                    handleDispatch(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      {/* {console.log(values)} */}
                      {console.log(errors)}
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Enter Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                        />
                        {touched.email && errors.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                        />
                        {touched.password && errors.password && (
                          <span className="error">{errors.password}</span>
                        )}
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LogIn;
