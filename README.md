# Attendance Tracker

A simple web application that helps students track and calculate their class attendance percentages.

## Features

- Calculate current attendance percentage
- Determine classes needed to reach 85% attendance
- Show number of classes bunked
- Calculate remaining bunkable classes while maintaining 85% attendance

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd attendance-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Deployment

### Deploying to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use the following settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Node Version: 14 or higher

### Deploying to Heroku

1. Create a new Heroku app:
```bash
heroku create your-app-name
```

2. Deploy the application:
```bash
git push heroku main
```

3. Open the application:
```bash
heroku open
```

## Environment Variables

The application uses the following environment variables:
- `PORT`: The port number the server will listen on (default: 3000)

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- HTML/CSS 
