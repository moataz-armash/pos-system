import React from "react";
import { useState, useEffect } from "react";
import { fetchStoreInfo } from "../../api"; // Import the API function
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const CahserInfo = () => {
  const [storeInfo, setStoreInfo] = useState(null);

  useEffect(() => {
    const getStoreInfo = async () => {
      try {
        const data = await fetchStoreInfo();
        setStoreInfo(data);
      } catch (error) {
        console.error("Error fetching the store info:", error);
      }
    };

    getStoreInfo();
  }, []);

  const { shopNo, casherNo, casherIpNo, version } = storeInfo || {};
  return (
    <Stack sx={{ width: "80%", margin: "auto" }} spacing={2}>
      <Alert severity="info">
        Mağaza No: {shopNo} <br /> Kasa No: {casherNo} <br /> Kasa Ip No:{" "}
        {casherIpNo} <br /> Version: {version}
      </Alert>
    </Stack>
  );
};

export default CahserInfo;
