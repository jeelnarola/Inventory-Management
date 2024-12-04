# Inventory Management

## Running the Server

#### ``` Start the server on PORT 9090. Ensure strict adherence to this port number. ```


## Project Overview
 
#### You are tasked with building an API for a Event Management. The project should include the following features.
- Register And Login JWT use and cooike set.
- CURD Operation performance.
- Import / Export CSV File.
- Low Stock To Aleart Set.


## Follow these instructions strictly.

### Implement in MVC Structure.
#### Database Connection.
1.  Create a 'configs' folder. Inside this folder, create a file named 'db.js'. Write logic to connect to MongoDB using an online database such as MongoDB Atlas.

<hr/>

#### Database Schema Design.

##### User Schema Design.
 
2. Create a 'models' folder
    - create a file named 'user.models.js' with the following schema.

```
username
email
password
role:{
    type:String,
    Enum:['user','supplier'],
    default:'user'
}
```
3. create a file named 'product.models.js' with the following schema.

```
name,
description, 
price,
quantity: {
    type: Number,
    required: true,
    default: 0
},
category,
supplier,
createdAt: {
    type: Date,
    default: Date.now
},
updatedAt: {
    type: Date,
    default: Date.now
}
```

## Sign Up and Login
### Sign Up - POST route
- Endpoint: Create a POST route at ```/Auth/register```.
- After a successful login, set cookies in the browser with the user's Token.
- Within the form, provide the following input fields with corresponding IDs:
    - username
    - password
    - email
    - role

### Login - POST route
- Create a POST route named ```/Auth/login```.
- Within the form, provide the following input fields with corresponding IDs:
    - email
    - password
- After a successful login, set cookies in the browser with the user's Token.

### Logout - POST route
- Create a POST route named ```/Auth/logout```.
- Remove Cookie.


## Product Management.

### GET route :- All Product Show
1. Create a GET route at ```/Product/show```.

### POST route :- Create Product For supplier.
1. Create a Post route at ```/Product/create```.
2. send a response containing all available event.
3. Middleware Use And Check supplier True to Create A Product And False to res message Unauthorized

### PATCH route :- Update Course For Admin
1. Create a Patch route at ```/Product/update/:id```.
2. send a response containing all available event.
3. Middleware Use And Check supplier True to Update A Product And False to res message Unauthorized.

### DELETE route :- DELETE Course For Admin
1. Create a DELETE route at ```/Product/delete/:id```.
2. send a response containing all available event.
3. Middleware Use And Check supplier Your Product DELETE True to Delete A Product And False to res message Unauthorized.

### POST route :- Import Product For supplier.
1. Create a Post route at ```/Product/import```.
2. only CSV File Import.

### POST route :- Export Product For supplier.
1. Create a Post route at ```/Product/export/:id```.
2 Export a CSV File For User.


## Routes

### Product.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```GET```    | ```/Product/show```   | Product Fetch all items.   |
| ```GET```    | ```/Product/export/:id```   | Export CSV File With Id.   |
| ```POST```    | ```/Product/create```   | Product Create .   |
| ```POST```    | ```/Product/import```   | Import CSV File one.   |
| ```PATCH```    | ```/Product/update/:id```   | Product Update With Id.   |
| ```DELETE```    | ```/Product/delete/:id```   | Product Delete With Id.   |

### User Auth.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```POST```    | ```/Auth/register```   | User Register.   |
| ```POST```    | ```/Auth/login```   | User Login.   |
| ```POST```    | ```/Auth/logout```   | User LogOut.   |

## Setup and Installation

### Steps:
1. Clone the repository.
```bash
 git clone <repository-url>
```
2. Install dependencies:

``` bash
npm install
```
3. Create a .env file and add your MongoDB connection string:
``` bash
PORT=9090
MONGODB_URL=mongodb+srv://InventoryManagement:InventoryManagement1234@cluster0.dgwjmgh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SERCERT=MY_JWT_TOKEN_KEY
```

4. Start the server:
``` bash
npm start
```