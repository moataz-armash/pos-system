import React from "react";
import { useState, useEffect } from "react";
import { fetchStoreInfo } from "../../../api"; // Import the API function
import { CircularProgress } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";

const CashierInfo = () => {
  const { t } = useTranslation();
  const [storeInfo, setStoreInfo] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const getStoreInfo = async () => {
      try {
        const data = await fetchStoreInfo();
        setStoreInfo(data);
      } catch (error) {
        console.error("Error fetching the store info:", error);
      } finally {
        setLoading(false);
      }
    };

    getStoreInfo();
  }, []);

  const { shopNo, casherNo, casherIpNo, version } = storeInfo || {};
  return (
    <Stack sx={{ width: "80%", marginLeft: "25px" }}>
      {loading ? (
        <CircularProgress size={24} /> // Show loading indicator while checking connectivity
      ) : (
        <Alert severity="info">
          {t("storeNo")}: {shopNo} <br /> {t("kashierNo")}: {casherNo} <br />{" "}
          {t("kashierIpNo")}: {casherIpNo} <br /> {t("version")}: {version}
        </Alert>
      )}
    </Stack>
  );
};

export default CashierInfo;
