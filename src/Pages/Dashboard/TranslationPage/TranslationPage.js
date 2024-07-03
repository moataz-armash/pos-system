import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Paper,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
} from "@mui/material";
import Dashboard from "../Dashboard";
import { LanguageContext } from "../../../hooks/Context/LanguageProvider";

function TranslationPage() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={3}>
          <Dashboard dashboard="dashboard" />
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ padding: "2rem", marginTop: "2rem" }}>
            <Typography variant="h4" gutterBottom>
              {t("languageSettings")}
            </Typography>

            <FormControl fullWidth sx={{ mt: 2 }} color="green">
              <InputLabel id="language-select-label">
                {t("selectLanguage")}
              </InputLabel>
              <Select
                labelId="language-select-label"
                id="language-select"
                value={language}
                label={t("selectLanguage")}
                onChange={handleLanguageChange}>
                <MenuItem value="en">{t("english")}</MenuItem>
                <MenuItem value="tr">{t("turkish")}</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="body1" sx={{ mt: 3 }}>
              {t("currentLanguage")}:{" "}
              {language === "en" ? t("english") : t("turkish")}
            </Typography>

            <Button
              variant="contained"
              color="green"
              sx={{ mt: 2, color: "white" }}
              onClick={() => alert(t("languageChanged"))}>
              {t("applyChanges")}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TranslationPage;
