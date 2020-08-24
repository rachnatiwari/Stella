# Stella - The Flower App
- An E-commerce website for flowers enabled with a user and admin login where the user may place an order while admin can add items and confirm items to be shipped to users. Additionally, users may search and sort flowers according to their preferences. The application is enabled with the Paypal payment gateway to pay for respective orders.
- [Video](https://drive.google.com/file/d/15JUlDmdFUYZca2TH2hTnnKS4T_3TpnHP/view?usp=sharing)

## Technology Stack (MERN)

- Node.js
- MongoDB
- Express Routing
- React Templating
- Redux Management

> All the dependencies being used are listed in `package.json`.

## Run Locally

### 1. Clone repo

```bash
$ git clone https://github.com/rachnatiwari/Stella.git
$ cd node-react-Stella
```

### 2. Install MongoDB

Download it from here: https://docs.mongodb.com/manual/administration/install-community/

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Create Admin User

- Run this on chrome: http://localhost:5000/api/users/createadmin
- It returns admin email and password

### 6. Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

### 7. Create Products

- Run http://localhost:3000/products
- Click create product and enter product info

## Project Folder Structure

> **Note**: The folder tree does not include sub-directories for common/generated folders. For example - `node_modules`.

```bash
├── Profile
├── README.md
├── backend
│   ├── config.js
│   ├── data.js
│   ├── models
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── routes
│   │   ├── orderRoute.js
│   │   ├── productRoute.js
│   │   ├── uploadRoute.js
│   │   └── userRoute.js
│   ├── server.js
│   └── util.js
├── frontend
│   ├── README.md
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └──images 
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── actions
│       │   ├── cartActions.js
│       │   ├── orderActions.js
│       │   ├── productActions.js
│       │   └── userActions.js
│       ├── components
│       │   ├── CheckoutSteps.js
│       │   ├── PaypalButton.js
│       │   └── Rating.js
│       ├── constants
│       │   ├── cartConstants.js
│       │   ├── orderConstants.js
│       │   ├── productConstants.js
│       │   └── userConstants.js
│       ├── index.css
│       ├── index.js
│       ├── reducers
│       │   ├── cartReducers.js
│       │   ├── orderReducers.js
│       │   ├── productReducers.js
│       │   └── userReducers.js
│       ├── screens
│       │   ├── CartScreen.js
│       │   ├── HomeScreen.js
│       │   ├── OrderScreen.js
│       │   ├── OrdersScreen.js
│       │   ├── PaymentScreen.js
│       │   ├── PlaceOrderScreen.js
│       │   ├── ProductScreen.js
│       │   ├── ProductsScreen.js
│       │   ├── ProfileScreen.js
│       │   ├── RegisterScreen.js
│       │   ├── ShippingScreen.js
│       │   └── SigninScreen.js
│       └── store.js
├── node_modules
├── package-lock.json
└── package.json
```
## Features
### The app supports following features

-   Any user can be view all stock in the database and search for any specific product
-   Password encryption for authentication at database
-   Paypal payment gateway for orders
-   Admin can add and delete stock
-   Admin can accept or reject any orders made by any customer
-   Admin can update details about any products at any time


## Contributions Best Practices

**Commits**

- Write clear meaningful git commit messages (Do read http://chris.beams.io/posts/git-commit/)
- Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (More info at https://github.com/blog/1506-closing-issues-via-pull-requests )
- When you make very very minor changes to a PR of yours (like for example fixing a failing travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterwards so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at https://davidwalsh.name/squash-commits-git )
- When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.

**Feature Requests and Bug Reports**

- When you file a feature request or when you are submitting a bug report to the [Issue tracker](https://github.com/rachnatiwari/Stella/issues), make sure you add steps to reproduce it. Especially if that bug is some weird/rare one.

**Join the development**

- Before you join development, please set up the system on your local machine and go through the application completely. Press on any link/button you can find and see where it leads to. Explore. (Don't worry ... Nothing will happen to the app or to you due to the exploring :wink: Only thing that will happen is, you'll be more familiar with what is where and might even get some cool ideas on how to improve various aspects of the app.)
- If you would like to work on an issue, drop in a comment at the issue. If it is already assigned to someone, but there is no sign of any work being done, please free to drop in a comment so that the issue can be assigned to you if the previous assignee has dropped it entirely.