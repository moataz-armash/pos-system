# POS System

![POS System Login Page](https://res.cloudinary.com/dyiccuwin/image/upload/v1721082064/Screenshot_2024-07-16_011949_cpfkui.png)
![POS System Dashboard Page](https://res.cloudinary.com/dyiccuwin/image/upload/v1721082064/Screenshot_2024-07-16_012028_m5ifkm.png)

A modern, feature-rich Point of Sale (POS) system built with React and Material-UI.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
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

## Features

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

## Demo

![Add a GIF or video demonstrating key features](https://res.cloudinary.com/dyiccuwin/image/upload/v1721083471/ScreenRecording2024-07-16013927-ezgif.com-video-to-gif-converter_th2coz.gif)

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
