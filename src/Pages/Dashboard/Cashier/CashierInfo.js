import React, { useState, useEffect } from "react";
import { fetchStoreInfo } from "../../../api";
import { CircularProgress, Alert, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

const CashierInfo = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [storeInfo, setStoreInfo] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <CircularProgress
          size={24}
          sx={{ color: theme.palette.primary.main }}
        />
      ) : (
        <Alert
          severity="info"
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.green.dark
                : theme.palette.info,
            color: theme.palette.text.primary,
            "& .MuiAlert-icon": {
              color: theme.palette.info.main,
            },
          }}>
          {t("storeNo")}: {shopNo} <br />
          {t("kashierNo")}: {casherNo} <br />
          {t("kashierIpNo")}: {casherIpNo} <br />
          {t("version")}: {version}
        </Alert>
      )}
    </Stack>
  );
};

export default CashierInfo;
