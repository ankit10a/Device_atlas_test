FROM node:20.15.0-alpine

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache bash

# Copy and configure wait-for-it FIRST
COPY wait-for-it.sh /usr/local/bin/wait-for-it
RUN chmod +x /usr/local/bin/wait-for-it

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Final command
CMD ["/usr/local/bin/wait-for-it", "db:3306", "--", "npm", "start"]