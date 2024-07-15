import React, { useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import Dashboard from "../Dashboard";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&.MuiTableCell-head": {
    backgroundColor: theme.palette.green.main,
    color: theme.palette.common.white,
  },
  "&.MuiTableCell-body": {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PrintTest = () => {
  const { t } = useTranslation();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const invoiceNumber = `INV-${Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0")}`;

  const dummyCart = [
    { name: "Product 1", quantity: 2, price: 10.99 },
    { name: "Product 2", quantity: 1, price: 24.99 },
    { name: "Product 3", quantity: 3, price: 5.99 },
  ];

  const dummySubtotal = 64.94;
  const dummyTax = 5.2;
  const dummyDiscount = 2.0;
  const dummyTotalAmount = 68.14;
  const dummyPaymentMethod = "cash";
  const dummyAmountPaid = 70.0;
  const dummyChange = dummyAmountPaid - dummyTotalAmount;

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "auto",
        padding: 4,
        bgcolor: "background.paper",
      }}>
      <Dashboard dashboard="dashboard" />
      <Box ref={componentRef} sx={{ padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}>
          <Typography variant="h4" gutterBottom>
            {t("invoice")} (Print Test)
          </Typography>
          <Box>
            <Typography variant="body1">
              <strong>{t("date")}:</strong> {currentDate}
            </Typography>
            <Typography variant="body1">
              <strong>{t("invoiceNo")}:</strong> {invoiceNumber}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: 4 }} />
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>{t("product")}</StyledTableCell>
                <StyledTableCell align="right">{t("quantity")}</StyledTableCell>
                <StyledTableCell align="right">{t("price")}</StyledTableCell>
                <StyledTableCell align="right">{t("total")}</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyCart.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${item.price.toFixed(2)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex" }}>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ mb: 1 }}>
              <strong>{t("subTotal")}:</strong> ${dummySubtotal.toFixed(2)}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>{t("tax")}:</strong> ${dummyTax.toFixed(2)}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>{t("discount")}:</strong> ${dummyDiscount.toFixed(2)}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">
              <strong>{t("total")}:</strong> ${dummyTotalAmount.toFixed(2)}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>{t("paymentMethod")}:</strong> {dummyPaymentMethod}
            </Typography>
            <Typography>
              <strong>{t("amountPaid")}:</strong> ${dummyAmountPaid.toFixed(2)}
            </Typography>
            <Typography>
              <strong>{t("change")}:</strong> ${dummyChange.toFixed(2)}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" align="center">
            {t("thankYou")}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="green"
          sx={{ color: "white" }}
          onClick={handlePrint}>
          {t("printInvoice")}
        </Button>
      </Box>
    </Box>
  );
};

export default PrintTest;
