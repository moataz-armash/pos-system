// hooks/useEInvoice.js
import { useState, useEffect } from "react";
import { useCart } from "./Context/CartContext";
import emailjs from "emailjs-com";

export const useEInvoice = (paymentMethod, amountPaid) => {
  const [emailJSUserId, setEmailJSUserId] = useState("");
  const { cart, subtotal, tax, totalAmount, discount } = useCart();

  useEffect(() => {
    setEmailJSUserId("iWoQuEgXXmyR741tq");
  }, []);

  const sendEInvoice = (email) => {
    const itemsList = cart.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price.toFixed(2),
      total: (item.price * item.quantity).toFixed(2),
    }));

    const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
        <h1>E-Invoice</h1>
      </div>
      <div style="margin-top: 20px;">
        <p>Dear customer,</p>
        <p>Thank you for your purchase. Please find the invoice details below:</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 20px;">
          <thead>
            <tr style="background-color: #f2f2f2;">
              <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">Product</th>
              <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">Quantity</th>
              <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">Price</th>
              <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsList
              .map(
                (item) => `
              <tr>
                <td style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">${item.name}</td>
                <td style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">${item.quantity}</td>
                <td style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">$${item.price}</td>
                <td style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">$${item.total}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div style="margin-top: 20px; text-align: center;">
        <p style="margin: 5px 0;"><strong>Subtotal:</strong> $${subtotal.toFixed(
          2
        )}</p>
        <p style="margin: 5px 0;"><strong>Tax:</strong> $${tax.toFixed(2)}</p>
        <p style="margin: 5px 0;"><strong>Discount:</strong> $${discount.toFixed(
          2
        )}</p>
        <p style="margin: 5px 0;"><strong>Total:</strong> $${totalAmount.toFixed(
          2
        )}</p>
        <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${paymentMethod}</p>
        <p style="margin: 5px 0;"><strong>Amount Paid:</strong> $${parseFloat(
          amountPaid
        ).toFixed(2)}</p>
      </div>
      <p>Best regards,</p>
      <p>The Store Team</p>
    </div>
  `;

    const templateParams = {
      to_email: email,
      email_content: emailContent,
    };

    emailjs
      .send(
        "service_v1ucjch",
        "template_nw1sx2r",
        templateParams,
        emailJSUserId
      )
      .then(
        (result) => {
          console.log("E-invoice sent successfully!", result.text);
          alert("E-invoice sent successfully!");
        },
        (error) => {
          console.error("Failed to send e-invoice:", error.text);
          alert("Failed to send e-invoice. Please try again later.");
        }
      )
      .catch((error) => {
        console.error("Error occurred while sending e-invoice:", error);
        alert(
          "An error occurred while sending the e-invoice. Please try again later."
        );
      });
  };

  const handleSendEInvoice = () => {
    const email = prompt("Please enter your email address:");
    if (email) {
      sendEInvoice(email);
    }
  };

  return { handleSendEInvoice };
};
