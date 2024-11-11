## Plant-Shop-Faith
## Tech Stack
-Frontend: React.js, CSS
-Backend: Node.js (Express), JSON Server (for mock API)
-State Management: React's useState and useEffect hooks


## Core Features
Display all plants:
 Upon app startup, the plant list is fetched from the backend and displayed on the page.

Add a new plant: 
A form allows users to input plant details (name, image URL, price) and submit it to the backend to add the plant to the inventory.

Mark a plant as sold out:
 Each plant has a button to mark it as "sold out." A PATCH request updates the plant status on the backend.

Search plants by name:
 Users can type in a search bar to filter plants based on their name.

## Installation Prerequisites
Make sure you have the following installed:

-Node.js: You can download it from here
-npm (comes with Node.js)
## Setup
Clone this repository to your local machine.
git clone (git@github.com:cutie-sudo/react-hooks-cc-plantshop.git)

## bash
Copy code
npm run server
The server will start on http://localhost:6001.

## Run the frontend.

bash
Copy code
npm start
This will start the frontend on http://localhost:3000.

## live site | live demo
https://reacplantshop40.netlify.app/

## License
This project is licensed under the MIT License 