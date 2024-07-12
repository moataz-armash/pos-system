import React, { useState, useRef, useEffect } from "react";
import { BarcodeFormat } from "@zxing/library";
import { useZxing } from "react-zxing";
import { Button, Box, Typography } from "@mui/material";

const BarcodeScanner = ({ onScan, onClose }) => {
  const [error, setError] = useState("");
  const [lastScanned, setLastScanned] = useState("");
  const videoRef = useRef(null);

  const { ref } = useZxing({
    onDecodeResult(result) {
      const scannedText = result.getText();
      // Process the scanned barcode without any length restrictions
      setLastScanned(scannedText);
      onScan(scannedText);
    },
    onError(error) {
      setError(error.message);
    },
    constraints: {
      video: {
        facingMode: "environment",
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    },
    formats: [
      BarcodeFormat.UPC_A,
      BarcodeFormat.EAN_13,
      BarcodeFormat.UPC_E,
      BarcodeFormat.CODE_128,
    ],
  });

  useEffect(() => {
    videoRef.current = ref.current;
  }, [ref]);

  return (
    <Box position="relative" width="300px" margin="auto">
      <Box
        position="relative"
        width="100%"
        height="200px"
        overflow="hidden"
        border="2px solid #02747a"
        borderRadius="4px">
        <video
          ref={ref}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      {error && <Typography color="error">Error: {error}</Typography>}
      {lastScanned && <Typography>Last scanned: {lastScanned}</Typography>}
      <Button
        variant="contained"
        color="error"
        onClick={onClose}
        sx={{ mt: 2 }}>
        Close Scanner
      </Button>
    </Box>
  );
};

export default BarcodeScanner;
