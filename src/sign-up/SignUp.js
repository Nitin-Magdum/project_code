import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import Container from "@material-ui/core/Container";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let SignupSchema = yup.object().shape({
  firstName: yup.string().required("This field is required."),
  lastName: yup.string().required("This field is required."),
  email: yup.string().email().required("This field is required."),
  password: yup
    .string()
    .min(6, "Password is too short.")
    .max(20, "Password is too long.")
    .required("This field is required."),
  confirmpassword: yup
    .string()
    .required("Confirm Password cannot be left blank")
    .test(
      "confirmpassword",
      "Password & confirm password should be same",
      function (cpass) {
        if (this.parent.password === cpass) {
          return true;
        }
        return false;
      }
    ),
});

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const theme = createTheme();
export default function SignUp() {
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",

            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      confirmpassword: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    {({ errors, handleChange, touched }) => (
                      <Form className={classes.form}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              error={errors.firstName && touched.firstName}
                              autoComplete="fname"
                              name="firstName"
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              id="firstName"
                              label="First Name"
                              autoFocus
                              helperText={
                                errors.firstName && touched.firstName
                                  ? errors.firstName
                                  : null
                              }
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              error={errors.lastName && touched.lastName}
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              id="lastName"
                              label="Last Name"
                              name="lastName"
                              autoComplete="lname"
                              helperText={
                                errors.lastName && touched.lastName
                                  ? errors.lastName
                                  : null
                              }
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              error={errors.email && touched.email}
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              helperText={
                                errors.email && touched.email
                                  ? errors.email
                                  : null
                              }
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              error={errors.password && touched.password}
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="current-password"
                              helperText={
                                errors.password && touched.password
                                  ? errors.password
                                  : null
                              }
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              error={
                                errors.confirmpassword &&
                                touched.confirmpassword
                              }
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              name="confirm password"
                              label="Confirm Password"
                              type="password"
                              id="confirmpassword"
                              autoComplete="current-password"
                              helperText={
                                errors.confirmpassword &&
                                touched.confirmpassword
                                  ? errors.confirmpassword
                                  : null
                              }
                            />
                          </Grid>
                        </Grid>

                        <Box sx={{ m: 3 }} />

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Sign Up
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </Container>
              <Box sx={{ m: 3 }} />
              <Grid container>
                <Grid
                  item
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Link href="" variant="body2">
                    {"Already Have Account? Sign-In "}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
