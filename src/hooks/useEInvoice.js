// hooks/useEInvoice.js
import { useState, useEffect } from "react";
import { useCart } from "./Context/CartContext";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export const useEInvoice = (paymentMethod, amountPaid) => {
  const { t } = useTranslation();
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
        <h1>${t("e-invoice")}</h1>
      </div>
      <div style="margin-top: 20px;">
        <p>${t("dearCustomer")},</p>
        <p>${t("thankEmail")}</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 20px;">
          <thead>
            <tr style="background-color: #f2f2f2;">
              <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">${t(
                "product"
              )}</th>
              <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">${t(
                "quantity"
              )}</th>
              <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">${t(
                "price"
              )}</th>
              <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">${t(
                "total"
              )}</th>
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
        <p style="margin: 5px 0;"><strong>${t(
          "subTotal"
        )}:</strong> $${subtotal.toFixed(2)}</p>
        <p style="margin: 5px 0;"><strong>${t("tax")}:</strong> $${tax.toFixed(
      2
    )}</p>
        <p style="margin: 5px 0;"><strong>${t(
          "discount"
        )}:</strong> $${discount.toFixed(2)}</p>
        <p style="margin: 5px 0;"><strong>${t(
          "total"
        )}:</strong> $${totalAmount.toFixed(2)}</p>
        <p style="margin: 5px 0;"><strong>${t(
          "paymentMethod"
        )}:</strong> ${paymentMethod}</p>
        <p style="margin: 5px 0;"><strong>${t(
          "amountPaid"
        )}:</strong> $${parseFloat(amountPaid).toFixed(2)}</p>
      </div>
      <p>${t("bestRegards")}</p>
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
          console.log(t("eInvoiceSentSuccessfully"), result.text);
          alert(t("eInvoiceSentSuccessfully"));
        },
        (error) => {
          console.error(t("failedToSendEInvoice"), error.text);
          alert(t("failedToSendEInvoice"));
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
    const email = prompt(t("pleaseEnterYourEmailAdress"));
    if (email) {
      sendEInvoice(email);
    }
  };

  return { handleSendEInvoice };
};
