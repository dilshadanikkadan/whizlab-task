# Local Development Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v8 or higher)
- MongoDB (v6.0 or higher)
- Git

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/dilshadanikkadan/whizlab-task
cd whizlab-task
```

### 2. Backend Setup (Server)
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create environment file
cp  .env

# Update .env file with your configuration
PORT=3000
MONG_URI=mongodb://localhost:27017/whizlab-inventory

```

### 3. Frontend Setup (Client)
```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install
```

## Running the Application

### Start Backend Server
```bash
# In the server directory
npm start
```
The server will start on http://localhost:3000

### Start Frontend Development Server
```bash
# In the client directory
npm run dev
```
The client will start on http://localhost:5173



## Testing

### Backend Tests
```bash
# In the server directory
npm test
```

### Frontend Tests
```bash
# In the client directory
npm test
```

## Common Issues and Solutions

### MongoDB Connection Issues
- Ensure MongoDB is running locally or global url
- Check if the connection string in `.env` is correct
- Verify MongoDB port isn't blocked by firewall

### Port Already in Use
```bash
# Check what's using the port
lsof -i :3000    # For backend port
lsof -i :5173    # For frontend port

# Kill the process
kill -9 <PID>
```

## Getting Help

If you encounter any issues:
1. Check the logs in the terminal
2. Review the troubleshooting section
