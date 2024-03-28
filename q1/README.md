# Corona Pandemic Management Project - Health Insurance Fund

Welcome to the Corona Pandemic Management Project - Health Insurance Fund README! This project is designed to manage health insurance funds, focusing on customer registration, user login, and administrative functionalities.

## Installation

To run the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the command `npm install` to install the necessary dependencies.
4. Start the Node.js server by running `npm start`.
5. Ensure that the project is running on port 8000 and connected to the database.

## Project Overview

### Server Side (Node.js)

The server side of the project handles the database operations and exposes APIs for managing customer data. You can interact with the server using tools like Postman.

#### Functionality:
- Display all customers' information.
- Add a new customer with required details.
- Update and delete customer data by ID.

### Client Side (React)

The client side of the project provides a user-friendly interface for customers and administrators.

#### User Login:
- Customers can log in using their full name and ID card to access personal and medical information related to COVID-19.

#### Sign Up:
- New users can register with the health fund by filling in the required information. Upon registration, they are automatically added to the customer database.

#### Manager Access:
- Cashier managers can access additional functionalities by entering a system-defined password (password: 2552).
- Accessing as a manager enables features like displaying a monthly graph of active patients and managing customer data.

### Administrator Access:
- Administrators have access to all functionalities of the health insurance fund.
- They can view, update, and delete customer data.
- Administrators can also view a monthly graph of active patients.

## Usage

To use the project:
1. Start the Node.js server.
2. Access the client side of the project by navigating to `localhost:8000` in your web browser.
3. Log in as a customer or register as a new user.
4. Optionally, access manager functionalities by entering the system-defined password.
5. As an administrator, manage customer data and view the monthly graph of active patients.

Feel free to explore the project and contribute to its development! If you encounter any issues or have suggestions, please open an issue in the GitHub repository.

![q1/REACT/main.png](main.png)
![q1/REACT/manager.png](manager.png)
![q1/REACT/signIn.png](signIn.png)
![q1/REACT/signUp.png](signUp.png)
![q1/REACT/getAllClients.png](getAllClients.png)
