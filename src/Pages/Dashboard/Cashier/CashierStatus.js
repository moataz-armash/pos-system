import React, { useState, useEffect } from "react";
import { Typography, CircularProgress, Alert } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const CashierStatus = () => {
  const [isOnline, setIsOnline] = useState(true); // Default to true assuming online
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const checkConnectivity = async () => {
      try {
        // Try to fetch a known resource (e.g., Google's public DNS)
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        setIsOnline(true);
      } catch (error) {
        setIsOnline(false);
      } finally {
        setLoading(false);
      }
    };

    checkConnectivity();
  }, []);

  const StyledDot = styled("span")(({ theme }) => ({
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: isOnline ? green[500] : red[500],
    marginRight: theme.spacing(1),
    animation: "pulse 1.5s infinite ease-in-out",
    "@keyframes pulse": {
      "0%": {
        transform: "scale(0.8)",
        opacity: 1,
      },
      "50%": {
        transform: "scale(1)",
        opacity: 0.7,
      },
      "100%": {
        transform: "scale(0.8)",
        opacity: 1,
      },
    },
  }));

  return (
    <div>
      {loading ? (
        <CircularProgress size={24} /> // Show loading indicator while checking connectivity
      ) : (
        <Alert
          severity={isOnline ? "success" : "error"}
          icon={false}
          sx={{
            width: "80%",
            marginLeft: "25px",
            marginTop: "20px",
            marginBottom: "20px",
          }}>
          <StyledDot />
          <Typography variant="body1" component="span">
            Mağaza Drumu:{" "}
            <span style={{ color: isOnline ? green[500] : red[500] }}>
              {isOnline ? "Çevrimiçi" : "Çevrimdışı"}
            </span>
          </Typography>
        </Alert>
      )}
    </div>
  );
};

export default CashierStatus;
