<h1 align="center">
POS SYSTEM
<h1 align="center">
<a href="https://res.cloudinary.com/dyiccuwin/image/upload/v1722089150/english-loginPage_h8cwey.png"><img src="https://res.cloudinary.com/dyiccuwin/image/upload/v1722089150/english-loginPage_h8cwey.png" alt="Markdownify" width="600"></a>
  <br>
  <br>
</h1>

<a name="readme-top"></a>

> This is a React project built with React.js, Context API, and hooks. It features a login page and a dashboard where employees can add products, manage quantities, apply discounts, and handle invoicing. The system also includes a virtual keyboard, multi-language support, and dark mode.


[![Vscode][Vscode]][Vscode-url]
[![json][json]][json-url]
[![git][git]][git-url]
[![material][material-shield]][material-url]
[![ZXing][zxing-shield]][zxing-url]
[![Axios][axios-shield]][axios-url]
[![emailjs-com][emailjs-com-shield]][emailjs-com-url]
[![i18next][i18n-shield]][i18n-url]
[![React Hook Form][react-hook-form-shield]][react-hook-form-url]
[![React Router][react-router-shield]][react-router-url]
[![React Simple Keyboard][react-simple-keyboard-shield]][react-simple-keyboard-url]
[![React to Print][react-to-print-shield]][react-to-print-url]
[![React Virtualized Auto Sizer][react-virtualized-auto-sizer-shield]][react-virtualized-auto-sizer-url]
[![React Window][react-window-shield]][react-window-url]
[![React Window Infinite Loader][react-window-infinite-loader-shield]][react-window-infinite-loader-url]
[![React ZXing][react-zxing-shield]][react-zxing-url]
[![MIT License][license-shield]][license-url]

<div align="right">
  <img src="https://res.cloudinary.com/dyiccuwin/image/upload/v1722089150/english-dashboard_efjm2x.png" alt="Add a GIF or video demonstrating key features" />
</div>



## Table of Contents

- [Live Demo](#live-demo)
- [Features](#-features)
  * [Multi-Language Virtual Keyboard](#multi-language-virtual-keyboard)
  * [Internationalization (i18n)](#internationalization-i18n)
  * [Dark and Light Theme Support](#dark-and-light-theme-support)
  * [Form Validation with React Hook Form](#form-validation-with-react-hook-form)
  * [Responsive Design](#responsive-design)
  * [UI Blocking](#ui-blocking)
  * [React Hooks](#react-hooks)
  * [Sorting and Filtering](#sorting-and-filtering)
  * [Pagination and Product Slider](#pagination-and-product-slider)
  * [Number Pad for Quantity Input](#number-pad-for-quantity-input)
  * [Success Alert for Adding to Cart](#success-alert-for-adding-to-cart)
  * [Offers for Products](#offers-for-products)
  * [Invoicing](#invoicing)
  * [See Price Option](#see-price-option)
  * [Product Generation](#product-generation)
  * [Custom 404 Page](#custom-404-page)

- [Getting Started](#getting-started)
 - [Prerequisites](#prerequisites)
 - [Installation](#installation)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Internationalization](#internationalization)
- [Styling](#styling)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Live Demo

<p align="center">
  <img src="https://res.cloudinary.com/dyiccuwin/image/upload/v1721083471/ScreenRecording2024-07-16013927-ezgif.com-video-to-gif-converter_th2coz.gif" alt="Add a GIF or video demonstrating key features" />
</p>

## ✨ Features

### ⌨️ [Multi-Language Virtual Keyboard](./src/components/LoginPage/virtual-keyboard)

- **Supports English and Turkish**: The virtual keyboard is pre-configured for these languages.
- **Expandable for Additional Languages**: It can be customized to support more languages.
- **Implementation**: 
  - Integrated a virtual keyboard component using `react-simple-keyboard`.
  - Configured the keyboard to switch layouts based on the selected language.

  ### Package Used

  - **[react-simple-keyboard](https://www.npmjs.com/package/react-simple-keyboard)**: The library used for the virtual keyboard.

### 🌐 Internationalization (i18n)

- **Language Support**: The POS system is configured to handle both English and Turkish languages.
- **Language Toggle**: Users can switch between supported languages using a toggle button positioned on the right side of the interface.
- **Persistent Language Settings**: User-selected language preferences are persisted in localStorage to ensure a consistent experience across sessions.
- **Dashboard Integration**: Language selection can also be managed through the "WWW" option available in the dashboard sidebar.
- **Context API Integration**: Implements Context API to propagate language settings throughout the entire application seamlessly.
- **Scalability**: Designed to be extensible, allowing for the addition of further languages as needed.
- **Implementation**:
  - Utilized `i18next` for managing translations and language settings.
  - Integrated language detection and persistence with `i18next-browser-languagedetector`.
  - Configured language switching functionality within the application interface.
  - Applied language changes globally using the Context API.

  ### Package Used

  - **[i18next](https://www.npmjs.com/package/i18next)**: The library used for comprehensive internationalization management.


  ### 📦 Package Used
  - **Internationalization Library**: Utilizes **[i18next](https://www.npmjs.com/package/i18next)** for comprehensive internationalization management.

### 🌙 Dark and Light Theme Support

- **Theme Management**: The system supports both dark and light themes, which can be toggled using a sun icon located at the right center of the website.
- **Implementation**:
  - **`ThemeProvider`**: Uses Material-UI's `ThemeProvider` to apply the current theme globally.
  - **Theme Toggle**: Integrated through a custom `ThemeToggle` component that interacts with a custom `useThemeMode` hook to switch themes.
  - **Persistent Styling**: Utilizes `CssBaseline` from Material-UI to ensure consistent styling across themes.
- **Integration**: Theme management is incorporated into the main `App` component, alongside other global settings such as language preferences and cart notifications.
  ### Package Used
  - **[@mui/material](https://www.npmjs.com/package/@mui/material)**: Provides the `ThemeProvider` and `CssBaseline` components for theme management.
  
### ✅ Form Validation with React Hook Form

- **Form Validation**: The login page incorporates form validation to ensure the data entered by the user matches the expected format before submission.
- **Implementation**:
  - **React Hook Form**: Utilizes `react-hook-form` to handle form validation and state management seamlessly.
  - **API Data Matching**: Validates the user-entered data against the data received from the API to ensure consistency and correctness.
  ### Package Used
  - **[react-hook-form](https://www.npmjs.com/package/react-hook-form)**: Provides the tools for managing form state and validation in a straightforward manner.

### 📱 Responsive Design

- **Responsive Design**: The entire website is designed to be compatible with all devices, ensuring a user-friendly experience across different screen sizes.
- **Implementation**:
  - **Material-UI**: Uses Material-UI components which are inherently responsive and adapt to various screen sizes.
- **User Experience**: Ensures that the interface is intuitive and accessible, providing a consistent user experience whether on mobile, tablet, or desktop.
   ### Package Used 
   - **[@mui/material](https://www.npmjs.com/package/@mui/material)**: Provides responsive UI components and styling tools.

### 🚧 UI Blocking

- **UI Blocking**: Implemented to inform users of ongoing API interactions, enhancing the user experience by preventing confusion during data loading.
- **Implementation**:
  - **MUI Spinners**: Utilizes Material-UI spinner components to display loading indicators, signaling to users that a process is ongoing.
- **User Experience**: Provides visual feedback during data fetching, ensuring users are aware that the application is processing their request.
   ### Package Used
   - **[@mui/material](https://www.npmjs.com/package/@mui/material)**: Supplies the spinner components used for indicating loading states.
### ⚙️ React Hooks

- **State Management**: Utilizes React's `useState` hook to manage component state efficiently.
- **Side Effects**: Employs the `useEffect` hook to handle side effects such as data fetching and subscriptions.
- **Context API**: Integrates `useContext` for accessing global state and context values throughout the application.
- **Custom Hooks**: Defines and uses custom hooks to encapsulate reusable logic and enhance code modularity.
- **Implementation**:
  - `useState`: Used to manage local component state, such as form inputs and toggle states.
  - `useEffect`: Applied for executing side effects, including API calls and updating DOM elements based on state changes.
  - `useContext`: Utilized to access and manipulate global state provided by context providers.
  - Custom Hooks: Created custom hooks like `useThemeMode` for managing theme-related logic and `useCart` for handling cart operations.

  ### Packages Used

  - **React**: Provides the core hooks for managing state and side effects.
  
 ### 🔍 Sorting and Filtering

- **Alphabetic Sorting**: Implements sorting functionality to arrange products alphabetically.
- **Search by Code**: Provides a search bar at the top of the dashboard, allowing users to search for products by their code.
- **Filter Options**: Users can display all products sorted alphabetically, enhancing the browsing experience.
- **Copy Product Code**: Each product card includes a copy icon to easily copy the product code to the clipboard.
- **Favorite Option**: Users can mark products as favorites for quick access and better organization.

  ### Implementation
  - **Alphabetic Sorting**: Products can be sorted in alphabetical order for easy navigation.
  - **Search Functionality**: The search bar enables quick product lookup by entering the product code.
  - **Dashboard Integration**: Sorting and filtering options are integrated within the dashboard for user convenience.
  - **Copy to Clipboard**: Product cards feature a copy icon that uses the `navigator.clipboard.writeText` method to copy the product code directly to the clipboard.
  - **Favorite Products**: Users can mark and unmark products as favorites, which are then easily accessible from a designated favorites section.

    ```javascript
    const handleCopyBarcode = useCallback((barcode) => {
      navigator.clipboard.writeText(barcode).then(
        () => {
          console.log("Barcode copied to clipboard");
        },
        (err) => {
          console.error("Could not copy text: ", err);
        }
      );
    }, []);
    ```

  ### Packages Used

  - **React**: Utilized for building the sorting, filtering, and favorite functionality within the application.

### 🔄 Pagination and Product Slider

- **Smooth Navigation**: Implements smooth pagination and sliding for handling large quantities of products efficiently.
- **Efficient Rendering**: Uses virtualized lists to optimize rendering performance for a large number of items.

  ### Implementation
  - **Pagination**: Breaks down large sets of products into manageable pages, ensuring quick load times and easy navigation.
  - **Product Slider**: Allows users to slide through products seamlessly, providing a smooth and responsive browsing experience.
  - **Virtualized List**: Utilizes `react-window` and `react-virtualized-auto-sizer` to only render items currently visible on the screen, significantly improving performance.

    ```javascript
    import { FixedSizeList as List } from "react-window";
    import AutoSizer from "react-virtualized-auto-sizer";

    const ProductList = ({ products }) => (
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            itemCount={products.length}
            itemSize={50}
            width={width}
          >
            {({ index, style }) => (
              <div style={style}>
                {products[index].name}
              </div>
            )}
          </List>
        )}
      </AutoSizer>
    );
    ```

  ### Packages Used

  - **[react-window](https://www.npmjs.com/package/react-window)**: For creating virtualized lists that efficiently render large sets of items.
  - **[react-virtualized-auto-sizer](https://www.npmjs.com/package/react-virtualized-auto-sizer)**: To automatically calculate and adjust the size of the virtualized list based on available space.
 
### 🔢 Number Pad for Quantity Input

  - **Dynamic Quantity Input**: Provides a number pad interface that allows users to specify the quantity of items they want to add.
  - **Add to Cart Functionality**: Users can enter the desired quantity and press "Add to Cart" to update the cart with the specified amount.
  - **Integration with Cart**: Directly updates the cart with the entered quantity upon confirmation.

  ### Implementation
  - **Number Pad**: A user-friendly interface for inputting numeric quantities, integrated directly into the product addition workflow.
  - **Quantity Management**: Users can input any desired quantity, which is then added to the cart upon clicking the "Add to Cart" button.
  
    ```javascript
    import React, { useState } from 'react';
    import NumberPad from './NumberPad'; // Assume NumberPad is your custom component

    const ProductPage = ({ product }) => {
      const [quantity, setQuantity] = useState(1);

      const handleAddToCart = () => {
        // Logic to add the product with specified quantity to the cart
        console.log(`Adding ${quantity} of ${product.name} to cart`);
      };

      return (
        <div>
          <h1>{product.name}</h1>
          <NumberPad value={quantity} onChange={setQuantity} />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      );
    };

    export default ProductPage;
    ```
    
    ### Package Used
    - **Custom Component**: Utilizes a custom number pad component to handle numeric input for quantities.
### 🔔 Success Alert for Adding to Cart

- **Success Alert**: Displays a confirmation message when a product is successfully added to the cart, including details about the product and quantity.

  ### Implementation
  - **Alert Notification**: Uses Material-UI's `Alert` component to inform users of successful cart updates.
  
  ```javascript
  import React, { useState } from 'react';
  import { Snackbar, Alert } from '@mui/material';
  import NumberPad from './NumberPad'; // Assume NumberPad is your custom component
  
  const ProductPage = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [alertOpen, setAlertOpen] = useState(false);
  
    const handleAddToCart = () => {
      // Logic to add the product with specified quantity to the cart
      console.log(`Adding ${quantity} of ${product.name} to cart`);
      setAlertOpen(true); // Show success alert
    };
  
    const handleAlertClose = () => {
      setAlertOpen(false); // Close success alert
    };
  
    return (
      <div>
        <h1>{product.name}</h1>
        <NumberPad value={quantity} onChange={setQuantity} />
        <button onClick={handleAddToCart}>Add to Cart</button>
        <Snackbar
          open={alertOpen}
          autoHideDuration={3000}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleAlertClose} severity="success">
            Added {quantity} {product.name}(s) to cart.
          </Alert>
        </Snackbar>
      </div>
    );
  };
  
  export default ProductPage;
  ```
   ### Package Used
    - **[@mui/material](https://www.npmjs.com/package/@mui/material)**: Utilizes Snackbar and Alert components from Material-UI for displaying the success alert.

### 🎁 Offers for Products

  - **Offer Types**: Users can apply different types of offers to their chosen products. Note that multiple offers cannot be applied simultaneously.
  
    ### Implementation
    - **Offers Management**: The logic for applying offers is managed within the cart context. The following offers are supported:
    
      - **Buy 3 Pay 2**: `id: "3buy2pay"`
      - **Buy 1 Get 1 Free**: `id: "1buy1free"`
      - **20% Off**: `id: "20off"`
      - **50% Off**: `id: "50off"`
    
    - **Message Alerts**: Alerts appear above the cart to inform users about which offer has been applied and how it affects their cart.
    
    ```javascript
    import React, { createContext, useContext, useState } from 'react';
    import { Snackbar, Alert } from '@mui/material';
    
    // Create context for cart management
    const CartContext = createContext();
    
    export const CartProvider = ({ children }) => {
      const [cart, setCart] = useState([]);
      const [appliedOffer, setAppliedOffer] = useState(null);
      const [alertOpen, setAlertOpen] = useState(false);
    
      const offers = [
        { id: "3buy2pay", label: "Buy 3 Pay 2" },
        { id: "1buy1free", label: "Buy 1 Get 1 Free" },
        { id: "20off", label: "20% Off" },
        { id: "50off", label: "50% Off" },
      ];
    
      const applyOffer = (offerId) => {
        if (offers.some(offer => offer.id === offerId)) {
          setAppliedOffer(offerId);
          setAlertOpen(true); // Show success alert with offer details
        } else {
          console.error('Invalid offer ID');
        }
      };
    
      const handleAlertClose = () => {
        setAlertOpen(false); // Close success alert
      };
    
      return (
        <CartContext.Provider value={{ cart, appliedOffer, applyOffer, offers }}>
          {children}
          <Snackbar
            open={alertOpen}
            autoHideDuration={3000}
            onClose={handleAlertClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            style={{ marginTop: '20px' }} // Adjust as needed to position above the cart
          >
            <Alert onClose={handleAlertClose} severity="success">
              {appliedOffer ? `Applied offer: ${offers.find(offer => offer.id === appliedOffer)?.label}` : ''}
            </Alert>
          </Snackbar>
        </CartContext.Provider>
      );
    };
    
    // Custom hook for using cart context
    export const useCart = () => {
      return useContext(CartContext);
    };
    ```

      ### Package Used
    
        - **API Context**: Uses context API within the cart context to manage and apply offers to products.
    
### 📃 Invoicing


- **Email Invoice**: Provides functionality to email the invoice to the customer after payment.
- **Virtual Invoice Preview**: Allows users to view the invoice virtually before printing.
- **Print Invoice**: Enables the printing of the invoice directly from the application.
- **Printer Test**: Includes a sidebar feature allowing users to test the printer with dummy data in the invoice.
- **Implementation**:
  - Utilizes `emailjs-com` to send the invoice via email.
  - Uses `react-to-print` to provide print functionality for invoices.
  - Implements a sidebar option to test the printer with dummy invoice data.
  
  ```javascript
  import React, { useRef } from 'react';
  import emailjs from 'emailjs-com';
  import ReactToPrint from 'react-to-print';

  // Function to send invoice email
  const sendInvoiceEmail = (templateParams) => {
    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
      }, err => {
        console.error('FAILED...', err);
      });
  };

  const templateParams = {
    customer_name: 'Moataz Mohamed',
    customer_email: 'moataz.doe@example.com',
    invoice_number: '123456',
    amount: '100.00'
  };

  sendInvoiceEmail(templateParams);

  // Component to print invoice
  const InvoiceComponent = React.forwardRef((props, ref) => (
    <div ref={ref}>
      {/* Replace with your actual invoice content */}
      <h1>Invoice</h1>
      <p>Invoice details go here</p>
    </div>
  ));

  const PrintInvoice = () => {
    const componentRef = useRef();

    return (
      <>
        <ReactToPrint
          trigger={() => <button>Print Invoice</button>}
          content={() => componentRef.current}
        />
        <InvoiceComponent ref={componentRef} />
      </>
    );
  };

  // Sidebar printer test component
  const PrinterTest = () => {
    const componentRef = useRef();

    return (
      <div>
        <button onClick={() => {
          const dummyData = {
            customer_name: 'Dummy User',
            invoice_number: '000000',
            amount: '0.00'
          };
          sendInvoiceEmail(dummyData);
        }}>Test Printer with Dummy Data</button>
        <ReactToPrint
          trigger={() => <button>Test Print</button>}
          content={() => componentRef.current}
        />
        <InvoiceComponent ref={componentRef} />
      </div>
    );
  };
  ```
   ### Package Used
        - **emailjs-com**:  For emailing invoices.
        - **react-to-print**: For printing invoices.

## 🔍 See Price Option

  - **UPC-A Scanning**: Allows users to scan products with UPC-A code using "react-zxing".
  - **Display Product Info**: Shows detailed product information after scanning.
  - **Add to Cart**: Enables adding scanned products to the cart.
  - **Quantity Input**: Users can specify the quantity before scanning to add large amounts of products at once.
  - **LocalStorage Integration**: Uses localStorage to maintain cart products even when switching between pages.
  
    ### Implementation
    
    - Integrates UPC-A code scanning for product lookup using "react-zxing".
    - Displays product details and allows adding products to the cart.
    - Includes a quantity input feature for batch addition of products.
    - Utilizes localStorage to preserve cart items across page navigations.
    
    ```javascript
    import React, { useState, useEffect } from 'react';
    import { BarcodeReader } from 'react-zxing';
    
    // Helper functions to manage cart in localStorage
    const getCartFromLocalStorage = () => {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : [];
    };
    
    const saveCartToLocalStorage = (cart) => {
      localStorage.setItem('cart', JSON.stringify(cart));
    };
    
    const SeePriceOption = () => {
      const [upcCode, setUpcCode] = useState('');
      const [quantity, setQuantity] = useState(1);
      const [productInfo, setProductInfo] = useState(null);
      const [cart, setCart] = useState(getCartFromLocalStorage());
    
      useEffect(() => {
        saveCartToLocalStorage(cart);
      }, [cart]);
    
      const handleScan = (result) => {
        setUpcCode(result.text);
        fetchProductInfoByUPC(result.text).then(info => {
          setProductInfo(info);
        });
      };
    
      const handleAddToCart = () => {
        if (productInfo) {
          const updatedCart = [...cart, { ...productInfo, quantity }];
          setCart(updatedCart);
        }
      };
    
      return (
        <div>
          <BarcodeReader
            onResult={handleScan}
            constraints={{ facingMode: 'environment' }}
          />
          <input
            type="text"
            value={upcCode}
            onChange={(e) => setUpcCode(e.target.value)}
            placeholder="Scan UPC Code"
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            min="1"
            placeholder="Quantity"
          />
          <button onClick={() => handleScan({ text: upcCode })}>Scan</button>
          <button onClick={handleAddToCart}>Add to Cart</button>
          {productInfo && (
            <div>
              <h2>Product Information</h2>
              <p>{productInfo.name}</p>
              <p>{productInfo.price}</p>
            </div>
          )}
        </div>
      );
    };
    
    // Mock functions
    const fetchProductInfoByUPC = async (code) => {
      // Replace with actual API call
      return { name: 'Product Name', price: 'Product Price' };
    };
  ```
       ### Package Used
          - **react-zxing**: For UPC-A code scanning.

## 📦 Product Generation

- **Data Source**: Uses free services like [MockAPI](https://mockapi.io/) and [Mocki](https://mocki.io/) to fetch initial product data.
- **Product Duplication**: Generates multiple versions of products with unique identifiers by appending numbers (e.g., "Apple 1", "Apple 2").
- **Dynamic Pricing**: Adjusts product prices randomly within a range to create price variations.

### Implementation

- **Product Duplication**: Duplicates existing products with unique barcodes and adjusted prices.
- **Unique Barcode Generation**: Ensures each product has a unique UPC-A barcode.
- **Random Price Variation**: Simulates price differences with random factors.

### Example

Here is an example of how to generate new products with unique barcodes and adjusted prices:

```javascript
function generateProducts(data) {
  // Code to process data and generate unique products
  // Example of barcode and price adjustment:
  const newProduct = {
    id: 31,
    name: "Apple 1",
    barcode: generateUniqueBarcode(existingBarcodes),
    price: generateRandomPrice(1.00), // Base price: $1.00
  };
}
```
 ### Package Used
    - **fs**: Used for reading and writing files in Node.js.

## 🚫 Custom 404 Page

- **User-Friendly Design**: Provides a customized 404 page for a better user experience when navigating to non-existent URLs.
- **Error Handling**: Redirects users to a friendly error page with helpful navigation options.

### Implementation

- **404 Page Configuration**: Configured a custom 404 page to enhance user experience.
- **Navigation Assistance**: Includes options to redirect users to the home page or other relevant sections of the site.

### Example

Here's an example of a simple custom 404 page:

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/">Go to Home Page</Link>
  </div>
);

export default NotFoundPage;
```




- **User Authentication**: Validates API data for login and access control.
- **Product Management**: Add, edit, delete products with image support
- **Inventory Tracking**: Real-time stock updates and low stock alerts
- **Barcode Scanning**: Scan products and add them to the cart instantly using the integrated ZXing library.
- **Multi-language Support**: Internationalization with i18next
- **Virtual Keyboard**: Touch-friendly, multi-language input for tablet and mobile use.
- **Cart Management**: Flexible cart system with discounts and tax calculation
- **Payment Processing**: Integration with popular payment gateways
- **Email Invoicing**: Send invoices directly to customers using emailjs
- **Invoicing**: Generate and display invoices virtually
- **Dark Theme Mode Support**: Offers a dark mode for enhanced readability and reduced eye strain.
- **Responsive Design**: Optimized for various devices and screen sizes



Demo credentials:
- Username:
```bash
Odell.Schoen@yahoo.com
```
- Password:
```bash
xL6NhsKlz4w42sv
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/moataz-armash/pos-system.git
```
2. Navigate to the project directory:
```bash
cd pos-system
```
3. Install dependencies:
```bash
npm install
```
2. Open `http://localhost:3000` in your browser

3. Log in with default admin credentials:
- Username:
 ```bash
Odell.Schoen@yahoo.com
```
- Password:
```bash
xL6NhsKlz4w42sv
```

## Project Structure
```bash
pos-system/
├── public/
│   ├── locales/
│   │   ├── en/
│   │   │   ├── translation.json
│   │   └── tr/
│   │   │   ├── translation.json
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── api/
│   │   ├── index.js
│   ├── assets/
│   │   ├── logo.png
│   │   └── pos.jpg
│   ├── components/
│   │   ├── Button/
│   │   │   ├── AddToCartButton.js
│   │   │   └── GreenButton.js
│   │   ├── Cart/
│   │   │   ├── BreadcrumbNavigation.js
│   │   │   ├── Cart.js
│   │   │   ├── CartActions.js
│   │   │   ├── CartButton.js
│   │   │   ├── CartDrawer.js
│   │   │   ├── CartItem.js
│   │   │   ├── CartSummary.js
│   │   │   ├── OfferSelector.js 
│   │   │   ├── PaymentProcessor.js
│   │   │   ├── ProductsWithOffers.js
│   │   │   └── VirtualInvoice.js
│   │   ├── Icon/
│   │   │   ├── Icon.js
│   │   │   ├── icons.js
│   │   │   └── index.js
│   │   ├── LoginPage/
│   │   │   ├── virtual-keyboard/
│   │   │   │   ├── keyboardLayouts.js
│   │   │   │   └── VirtaulKeyboard.js
│   │   │   ├── ButtonField.js
│   │   │   ├── Form.js
│   │   │   ├── Image.js
│   │   │   └── InputField.js
│   │   ├── ProductList/
│   │   │   ├── AlphabetFilter.jsx
│   │   │   ├── CategoryList.js
│   │   │   ├── NumberPad.js
│   │   │   ├── ProductCard.js
│   │   │   ├── ProductList.js
│   │   │   ├── SearchBar.js
│   │   │   ├── SubcategoryList.js
│   │   │   └── ProductCard.jsx
│   │   ├── LanguageToggle.js
│   │   ├── ThemeToggle.js
│   ├── hooks/
│   │   ├── Context/
│   │   │   ├── CartContext.js
│   │   │   ├── FormContext.js
│   │   │   ├── LanguageProvider.js
│   │   │   └── useThemeMode.js
│   │   ├── useCashPayment.js
│   │   ├── useCreditCardPayment.js
│   │   ├── useEInvoice.js.js
│   │   └── useProductList.js
│   ├── pages/
│   │   ├── Dashboard.js
│   │   │   ├── Cashier/
│   │   │   │   ├── CashierInfo.js
│   │   │   │   ├── CashierStatus.js
│   │   │   │   └── CashierSystem.js
│   │   │   ├── PricePage/
│   │   │   │   ├── BarcodeScanner.js
│   │   │   │   └── PricePage.js
│   │   │   ├── PrinterTest/
│   │   │   │   ├── PritnerTest.js
│   │   │   ├── SideBar/
│   │   │   │   ├── Logo.js
│   │   │   │   ├── Menu.js
│   │   │   │   ├── MenuItem.js
│   │   │   │   ├── Sidebar.js
│   │   │   │   ├── Submenu.js
│   │   │   │   └── UserProfile.js
│   │   │   ├── TranslationPage/
│   │   │   │   ├── TranslationPage.js
│   │   │   ├── Dashboard.js
│   │   │   └── ShoppingCart.js
│   │   ├── Login/
│   │   │   ├── LoginPage.js
│   │   └── NotFound/
│   │      ├── NotFound.js
│   ├── routes/
│   │   │   ├── AppRoutes.js
│   ├── utils/
│   │   ├── axiosInstance.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── i18n.js
│   ├── index.css
│   ├── index.js
│   ├── muiTheme.js
│   ├── ReportWebVitals.js
│   └── setupTests.js
├── .env.example
├── .gitignore
├── package-lock  .json
├── package.json
└── README.md
```

## Key Components

- `LoginForm`: Handles user authentication
- `ProductList`: Displays and manages product inventory
- `Cart`: Manages selected items and checkout process
- `Dashboard`: Provides overview of sales and key metrics
- `BarcodeScanner`: Integrates ZXing for product scanning

## State Management

I use React Context API for global state management:
- `FormContext`: Handles form state
- `CartContext`: Handles shopping cart state

## API Integration
I use Axios for API requests. API functions are centralized in the api directory.
Example:
```bash
// src/api/index.js
import api from '../utils/api';

export const fetchStoreInfo = () => api.get('/storeInfo');
export const fetchProducts = (product) => api.get('/products');
```

## Internationalization
I use i18next for multi-language support. Language files are stored in public/locales/.
Example usage:
```bash
import { useTranslation } from 'react-i18next';

function Welcome() {
  const { t } = useTranslation();
  return <h1>{t('welcome.title')}</h1>;
}
```
## Styling
I use Material-UI for consistent styling. Custom theme is defined in src/theme.js.
Example:
```bash
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```
## Deployment

1. Build the project:
```bash
npm run build
```
2. Deploy the build folder to your hosting service


## Authors

Moataz Armash - Initial work - moataz-armash
See also the list of contributors who participated in this project.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

Hat tip to anyone whose code was used
Inspiration
etc


Developed with ❤️ by Moataz Armash
https://github.com/moataz-armash/pos-system | Report an Issue


For more information, please contact moatazarmash@gmail.com


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[material-shield]:https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[material-url]: https://www.npmjs.com/package/@mui/material
[zxing-shield]: https://img.shields.io/badge/zxing-000000?style=for-the-badge
[zxing-url]: https://github.com/zxing-js/library
[axios-shield]: https://img.shields.io/badge/axios-5A29E4?style=for-the-badge
[axios-url]: https://axios-http.com/
[emailjs-com-shield]: https://img.shields.io/badge/emailjs--com-0D47A1?style=for-the-badge
[emailjs-com-url]: https://www.emailjs.com/
[i18n-shield]: https://img.shields.io/badge/i18next-26A69A?style=for-the-badge
[i18n-url]: https://www.i18next.com/
[React-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[react-dom-shield]: https://img.shields.io/badge/react--dom-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-dom-url]: https://reactjs.org/docs/react-dom.html
[react-hook-form-shield]: https://img.shields.io/badge/react--hook--form-EC5990?style=for-the-badge
[react-hook-form-url]: https://react-hook-form.com/
[react-router-shield]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[react-router-url]: https://reactrouter.com/
[react-simple-keyboard-shield]: https://img.shields.io/badge/react--simple--keyboard-282C34?style=for-the-badge&logo=react&logoColor=61DAFB
[react-simple-keyboard-url]: https://virtual-keyboard.js.org/
[react-to-print-shield]: https://img.shields.io/badge/react--to--print-20232A?style=for-the-badge
[react-to-print-url]: https://github.com/gregnb/react-to-print
[react-virtualized-auto-sizer-shield]: https://img.shields.io/badge/react--virtualized--auto--sizer-20232A?style=for-the-badge
[react-virtualized-auto-sizer-url]: https://github.com/bvaughn/react-virtualized-auto-sizer
[react-window-shield]: https://img.shields.io/badge/react--window-20232A?style=for-the-badge
[react-window-url]: https://github.com/bvaughn/react-window
[react-window-infinite-loader-shield]: https://img.shields.io/badge/react--window--infinite--loader-20232A?style=for-the-badge
[react-window-infinite-loader-url]: https://github.com/bvaughn/react-window-infinite-loader
[react-zxing-shield]: https://img.shields.io/badge/react--zxing-20232A?style=for-the-badge
[react-zxing-url]: https://github.com/gc-victor/react-zxing
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mete-uçar-1626101b3/
[Vscode]:https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white
[Vscode-url]:https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white
[html]:https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]:https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white  
[json]:https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white 
[json-url]:https://www.json.org/json-en.html
[git]:https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white
[git-url]:https://git-scm.com
