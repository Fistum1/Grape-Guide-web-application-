# Grape-Guide-web-application-

---

# Grape Guide API

The Grape Guide API is designed to suggest a wine for the user based on their food/dinner choice/order. It provides a list of sample foods and wines, and when a user selects a food, it recommends a wine that pairs well with it.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Sample Requests and Responses](#sample-requests-and-responses)
- [Contributing](#contributing)
- [License](#license)

## Features
- Provides a list of sample foods and wines
- Recommends a wine based on the selected food
- Simple and user-friendly interface

## Technologies Used
- Node.js
- React
- MySQL

## Getting Started
### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)
- MySQL

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/fistum1/Grape-Guide-web-application-.git
   ```
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the backend folder and add your MySQL database credentials:
   ```env
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_DATABASE=grape_guide
   ```
5. Run the backend server:
   ```bash
   npm start
   ```
6. In a new terminal window, navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
7. Install frontend dependencies:
   ```bash
   npm install
   ```
8. Run the frontend development server:
   ```bash
   npm start
   ```

## Usage
1. Access the Grape Guide API frontend at `http://localhost:3000`.
2. Select a food item from the dropdown menu.
3. Click on the "Get Recommended Wine" button.
4. The recommended wine for the selected food will be displayed along with a list of wine options.

## Endpoints
- `GET /api/foods`: Get a list of sample foods.
- `GET /api/wines`: Get a list of sample wines.
- `GET /api/food/:foodName`: Get the recommended wine for a specific food.

## Sample Requests and Responses
### GET /api/foods
#### Request
```http
GET /api/foods
```
#### Response
```json
[
  {
    "id": 1,
    "name": "Beef Bourguignon"
  },
  {
    "id": 2,
    "name": "Grilled Lamb Chops"
  },
  {
    "id": 3,
    "name": "Roast Duck"
  },
  {
    "id": 4,
    "name": "BBQ Ribs"
  },
  {
    "id": 5,
    "name": "Mushroom Risotto"
  }
]
```

### GET /api/wines
#### Request
```http
GET /api/wines
```
#### Response
```json
[
  {
    "id": 1,
    "name": "Wine 1",
    "type": "Red Wine",
    "image_url": "/images/wine1.jpg"
  },
  {
    "id": 2,
    "name": "Wine 2",
    "type": "White Wine",
    "image_url": "/images/wine2.jpg"
  },
  {
    "id": 3,
    "name": "Wine 3",
    "type": "Rosé Wine",
    "image_url": "/images/wine3.jpg"
  }
]
```

### GET /api/food/:foodName
#### Request
```http
GET /api/food/Beef%20Bourguignon
```
#### Response
```json
{
  "name": "Wine 1",
  "type": "Red Wine",
  "image_url": "/images/wine1.jpg"
}
```

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this `README.md` file further based on your specific API features, usage instructions, and additional information you want to provide to users.
