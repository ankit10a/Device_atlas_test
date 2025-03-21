# DeviceAtlas Technical Test

A web application that collects device information using the DeviceAtlas API and displays filtered tablet devices.

## Features

- Fetches device data from DeviceAtlas API
- Stores normalized data in MySQL database
- Frontend displays tablet devices sorted by OS version
<!-- - Dockerized development environment -->
- API endpoints for data management

## Technologies

- **Frontend**: Vite + React + TypeScript (Port 5013)
- **Backend**: Node.js + Express + TypeScript (Port 5012)
- **Database**: MySQL (Port 3306)

## Prerequisites

- Node.js (v18+)
- npm (v9+)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ankit10a/Device_atlas_test
cd Device_atlas_test
```
### 2. set up the backend env
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