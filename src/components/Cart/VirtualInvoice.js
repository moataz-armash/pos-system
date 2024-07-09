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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const VirtualInvoice = ({
  cart,
  subtotal,
  tax,
  discount,
  totalAmount,
  paymentMethod,
  amountPaid,
  onClose,
}) => {
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

  const change =
    paymentMethod === "cash" ? parseFloat(amountPaid) - totalAmount : 0;

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "auto",
        padding: 4,
        bgcolor: "background.paper",
      }}>
      <Box ref={componentRef} sx={{ padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}>
          <Typography variant="h4" gutterBottom>
            Invoice
          </Typography>
          <Box>
            <Typography variant="body1">
              <strong>Date:</strong> {currentDate}
            </Typography>
            <Typography variant="body1">
              <strong>Invoice No:</strong> {invoiceNumber}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: 4 }} />
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Product</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    ${item.price.toFixed(2)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
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
              <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Tax:</strong> ${tax.toFixed(2)}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Discount:</strong> ${discount.toFixed(2)}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">
              <strong>Total:</strong> ${totalAmount.toFixed(2)}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Payment Method:</strong> {paymentMethod}
            </Typography>
            {paymentMethod === "cash" && (
              <>
                <Typography>
                  <strong>Amount Paid:</strong> $
                  {parseFloat(amountPaid).toFixed(2)}
                </Typography>
                <Typography>
                  <strong>Change:</strong> ${change.toFixed(2)}
                </Typography>
              </>
            )}
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" align="center">
            Thank you for your business!
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="green"
          sx={{ color: "white" }}
          onClick={handlePrint}>
          Print Invoice
        </Button>
        <Button variant="outlined" color="error" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default VirtualInvoice;
