import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Css/Contact.css";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import { Formik, Form } from "formik";
import { validationSchema } from "../Yup/Yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
    name: string;
    lastName: string;
    mail: string;
    textField: string;
}

const Contact: React.FC = () => {
    const initialValues: FormValues = {
        name: "",
        lastName: "",
        mail: "",
        textField: "",
    };

    const handleSubmit = (values: FormValues) => {
        toast.success("Your Message Has Been Sent", {
            style: {
                backgroundColor: 'black',
                color: 'black',
                padding: '10px 20px',
                borderRadius: '5px',

            },
        });
        console.log("Form Submitted:", values);
    };

    return (
        <div className="main2">
            <Navbar />
            <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
                <Box
                    sx={{
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: 'url("https://source.unsplash.com/1600x900/?space,stars") center/cover',
                        color: "#fff",
                        padding: 4,
                    }}
                >
                    <Paper
                        elevation={6}
                        sx={{
                            padding: 5,
                            maxWidth: 700,
                            width: "100%",
                            borderRadius: 5,
                            backgroundColor: "rgba(20, 20, 20, 0.85)",
                            color: "#fff",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        <Typography
                            variant="h3"
                            align="center"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                color: "#58d6ff",
                                textShadow: "0 0 8px rgba(88, 214, 255, 0.7)",
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Typography align="center" sx={{ mb: 4, fontSize: "1.1rem", color: "#bbb" }}>
                            Share Your Ideas With Us!
                        </Typography>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ values, handleChange, handleBlur, touched, errors }) => (
                                <Form>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                        <TextField
                                            name="name"
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText=<div className="color" style={{ color: "red" }}>{touched.name && errors.name}</div>
                                            error={touched.name && Boolean(errors.name)}
                                            InputProps={{
                                                style: { backgroundColor: "#333", color: "#fff", borderRadius: 8 },
                                            }}
                                        />

                                        <TextField
                                            name="lastName"
                                            label="Last Name"
                                            variant="outlined"
                                            fullWidth
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText=<div className="color" style={{ color: "red" }}>{touched.lastName && errors.lastName}</div>
                                            error={touched.lastName && Boolean(errors.lastName)}
                                            InputProps={{
                                                style: { backgroundColor: "#333", color: "#fff", borderRadius: 8 },
                                            }}
                                        />

                                        <TextField
                                            name="mail"
                                            label="E-Mail"
                                            type="email"
                                            variant="outlined"
                                            fullWidth
                                            value={values.mail}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText=<div className="color" style={{ color: "red" }}>{touched.mail && errors.mail}</div>
                                            error={touched.mail && Boolean(errors.mail)}
                                            InputProps={{
                                                style: { backgroundColor: "#333", color: "#fff", borderRadius: 8 },
                                            }}
                                        />

                                        <TextField
                                            name="textField"
                                            label="Message"
                                            multiline
                                            rows={5}
                                            variant="outlined"
                                            fullWidth
                                            value={values.textField}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText=<div className="color" style={{ color: " " }}>{touched.textField && errors.textField}</div>
                                            error={touched.textField && Boolean(errors.textField)}
                                            InputProps={{
                                                style: { backgroundColor: "#333", color: "#fff", borderRadius: 8 },
                                            }}
                                        />

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                textTransform: "none",
                                                fontSize: "18px",
                                                padding: "12px 28px",
                                                borderRadius: 30,
                                                alignSelf: "center",
                                                background: "linear-gradient(135deg, #58d6ff, #8a76e2)",
                                                color: "#fff",
                                                "&:hover": {
                                                    background: "linear-gradient(135deg, #47c3e0, #7a68d1)",
                                                    transform: "scale(1.05)",
                                                },
                                                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                                            }}
                                        >
                                            Send
                                        </Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Paper>
                </Box>
            </Container>
            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{
                    fontFamily: 'Arial, sans-serif',
                }}
            />
        </div>
    );
};

export default Contact;
