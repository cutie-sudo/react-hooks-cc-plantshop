##Plantsy - Plant Store Admin Dashboard
Welcome to Plantsy! This web app is designed for managing plants in an online store. The app allows admins to view and manage plant inventory, including adding new plants, marking them as "sold out," searching for plants by name, and more.

Features:
View all plants: Displays a list of all plants available in the store.
Add new plants: Admins can add new plants to the inventory via a form.
Mark plants as "Sold Out": Admins can mark plants as sold out, which updates their status in the store.
Search plants: Allows users to search for plants by name.


Live Demo
View Demo GIF
![Demo GIF](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-mock-code-challenge-plantshop/plantsy_demo.gif)


Table of Contents
Tech Stack
Core Features
Advanced Features
Installation
Usage
API Endpoints
License

Tech Stack
Frontend: React.js, CSS
Backend: Node.js (Express), JSON Server (for mock API)
State Management: React's useState and useEffect hooks


Core Features
Display all plants: Upon app startup, the plant list is fetched from the backend and displayed on the page.
Add a new plant: A form allows users to input plant details (name, image URL, price) and submit it to the backend to add the plant to the inventory.
Mark a plant as sold out: Each plant has a button to mark it as "sold out." A PATCH request updates the plant status on the backend.
Search plants by name: Users can type in a search bar to filter plants based on their name.


Advanced Features (Optional)
Delete a plant: Admins can delete a plant from the store, and it will be removed from the inventory upon page refresh.

Installation
Prerequisites
Make sure you have the following installed:

Node.js: You can download it from here
npm (comes with Node.js)
Setup
Clone this repository to your local machine.

bash
Copy code
git clone https://github.com/your-username/plantsy.git
cd plantsy
Install dependencies.

bash
Copy code
npm install
Run the backend (mock API server).

bash
Copy code
npm run server
The server will start on http://localhost:6001.

Run the frontend.

bash
Copy code
npm start
This will start the frontend on http://localhost:3000.

Usage
Open http://localhost:3000 in your browser.
You should now be able to view and interact with the plant store admin dashboard.
Use the form to add new plants to the store, and use the "Mark as Sold Out" button to update plant statuses.
API Endpoints
The app interacts with the following API endpoints:

GET /plants
Fetch all plants.

Response:
json
Copy code
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
POST /plants
Add a new plant to the store.

Request Body:

json
Copy code
{
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
Response:

json
Copy code
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
PATCH /plants/
Update a plant (e.g., mark as sold out or update price).

Request Body (Example: Mark as sold out):

json
Copy code
{
  "soldOut": true
}
Response:

json
Copy code
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99,
  "soldOut": true
}
DELETE /plants/
Delete a plant from the inventory.

Response:
json
Copy code
{}
License
This project is licensed under the MIT License (https://github.com/cutie-sudo/Phase-1-Project/blob/main/license.md*)