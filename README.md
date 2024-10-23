# Product Management System - Backend API

This project is part of my **Internpulse internship**, where I was tasked with building a backend API for a **Product Management System**. The API allows users to **create**, **retrieve**, **update**, and **delete** products. It follows RESTful principles and is implemented using **Node.js**, **Express**, and **MongoDB**.

## Features

- **Create a Product**: Add a new product by providing its name.
- **Retrieve Products**: Fetch product details by querying by name or ID.
- **Update a Product**: Update product information either by name or ID.
- **Delete a Product**: Remove a product from the system using its name or ID.
- **Error Handling**: Appropriate HTTP status codes and error messages are returned for various error scenarios (e.g., 404 Not Found, 400 Bad Request).
- **Unit Testing**: The API is tested using Jest and Supertest for each endpoint.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building the API.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: MongoDB Object Data Modeling (ODM) for better interaction with the database.
- **dotenv**: For managing environment variables.
- **Jest**: JavaScript testing framework for unit tests.
- **Supertest**: HTTP assertions for API testing.

## Installation

### Prerequisites

- **Node.js**: Install [Node.js](https://nodejs.org/) on your machine.
- **MongoDB**: You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or install MongoDB locally.

## Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/product-management.git
    cd product-management
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Setup environment variables**:
    Create a `config.js` file in the root directory and add the following:
    ```javascript
    export const PORT = 5555;
    export const mongoDbURL = your_mongodb_connection_string;
    ```

4. **Start the server**:
    ```bash
    npm run dev
    ```

The API will be running at [http://localhost:5555](http://localhost:5555).


## API Endpoints

### Create Product:
- **URL**: `/products`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "productName": "Product Name"
    }
    ```
- **Response**:
    ```json
    {
        "product": { ... }
    }
    ```

### Get Product by Name or ID:
- **URL**: `/api/products?name=ProductName` (by name) or `/api/products/:id` (by ID)
- **Method**: `GET`
- **Response**:
    ```json
    {
        "_id": "productId",
        "name": "Product Name",
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
    }
    ```

### Update Product by Name or ID:
- **URL**: `/api/products?name=OldProductName` (by name) or `/api/products/:id` (by ID)
- **Method**: `PUT`
- **Request Body**:
    ```json
    {
        "name": "New Product Name"
    }
    ```
- **Response**:
    ```json
    {
        "message": "Product updated successfully",
        "product": { ... }
    }
    ```

### Delete Product by Name or ID:
- **URL**: `/product?name=productName` (by name) or `/product/:id` (by ID)
- **Method**: `DELETE`
- **Response**:
    ```json
    {
        "message": "Product deleted successfully!!!"
    }
    ```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

## Error Handling

The API uses proper error handling for various scenarios:

- **400 Bad Request**: If required fields are missing or invalid.
- **404 Not Found**: If a product is not found.
- **500 Internal Server Error**: For unexpected server errors.

## Deployment

You can deploy the API to any platform supporting Node.js, such as:

- **Heroku**
- **Vercel**
- **DigitalOcean**

### To deploy:

1. Push the project to a GitHub repository.
2. Follow the platform’s steps for deployment.
3. Make sure to set environment variables like `MONGO_URI` on the hosting platform.

## Author

- **Name**: Aliu Adeyemi Adeniji
- **Role**: Backend Developer
- **Contact**: [adenijialiuadeyemi@gmail.com](mailto:adenijialiuadeyemi@gmail.com)
- **GitHub**: [https://github.com/adenijialiuadeyemi](https://github.com/adenijialiuadeyemi)
- **LinkedIn**: [https://linkedin.com/in/AliuAdenijiAde1](https://linkedin.com/in/AliuAdenijiAde1)

## License

This project is licensed under the MIT License.
