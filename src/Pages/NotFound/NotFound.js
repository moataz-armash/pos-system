import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography component="h1" variant="h3">
          404
        </Typography>
        <Typography component="h2" variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          The page you are looking for does not exist. Please check the URL or
          go back to the homepage.
        </Typography>
        <Button variant="contained" color="error" onClick={handleBackToHome}>
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
