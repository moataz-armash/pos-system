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

- [Demo](#demo)
- [Features](#features)
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

## Demo

<p align="center">
  <img src="https://res.cloudinary.com/dyiccuwin/image/upload/v1721083471/ScreenRecording2024-07-16013927-ezgif.com-video-to-gif-converter_th2coz.gif" alt="Add a GIF or video demonstrating key features" />
</p>

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
