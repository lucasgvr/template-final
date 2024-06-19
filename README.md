
# Template Final Project

This repository contains the final version of the Template project. Follow the instructions below to get started.

## Techonologies used
- React 
- Node
- XAMPP (MySql)

## Installation

1. **Clone the repository:**
```bash
  git clone https://github.com/lucasgvr/template-final.git
```
2. **Navigate to the project directory:**
```bash
  cd template-final
```
3. **Install dependencies:**
- Using npm:
```bash
  npm install
```
- Using yarn:
```bash
  yarn
```
## Setting up the Database
1. **Database Setup:**
- Locate the 'db.txt' file under 'src/model'.
- Use this file to create the database in XAMPP.
- Default database name: 'template'.
2. **Configuring Database Connection:**
- If you need to change the database configuration:
  - Navigate to 'src/model/server.js'.
  - Locate the database instance configuration.
  - Now you cant set other database name, password, host or user.

## Running the Application
1. **Start XAMPP:**
- Ensure MySql and Apache are running in XAMPP.
2. **Run the backend server:**
```bash
  node src/model/server.js
```
3. **Run the application:**
```bash
  yarn dev
```

Now your app is ready to be used.

## Additional Information
- **Folder Structure:**
  - 'src/model/': database and server configuration file
  - 'src/view/': frontend pages and components files
  - 'src/controller/': authentication related files and functions
- **Troubleshooting:**
  - If you encounter any issues, verify database credentials in 'src/model/server.js'.
  - Check if XAMPP services (MySQL and Apache) are running correctly.

 
