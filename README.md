# DeviceAtlas Technical Test

A web application that collects device information using the DeviceAtlas API and displays filtered tablet devices.

## Features

- Fetches device data from DeviceAtlas API
- Stores normalized data in MySQL database
- Frontend displays devices details
- In Frontent above table filters(Dropdown) are given for the seraching(Filtering) and sorting the table
- Dockerized development environment
- API endpoints for data management

## Technologies

- **Frontend**: Vite + React + TypeScript (Port 5013)
- **Backend**: Node.js + Express + TypeScript (Port 5012)
- **Database**: MySQL (Port 3307)
- **Containerization**: Docker + Docker Compose

## Prerequisites

- Node.js (v20+)
- npm (v9+)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ankit10a/Device_atlas_test
cd Device_atlas_test
```
### 2. Set up the backend env inside the backend folder
```bash
PORT=5012 # port of the backend
ENV=DEV  # env of the backend
DB_PORT='3306'
DB_NAME ='Device_Atlas'
DB_HOST=127.0.0.1
DB_USER='user'
DB_PASS=password
DB_SYNC=SYNC # for syncing the table of database
```
### 3. Start the application
```bash
docker-compose down -v && docker-compose up -d --build

```

### 4. Project sturcture.
bash
```
.
├── frontend/          # Vite React app (port 5013)
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Express API server (port 5012)
│   ├── src/
│   ├── prisma/
│   └── package.json
├── db-init/           # dbscript (port 3307)
│   ├── initdb.sql/
├── docker-compose.yml
└── README.md
```

# 5. Environment
- For development 
```
npm run dev
```
- For produciton 

```
npm start
```