FROM node:20.15.0-alpine as builder
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY package.json package.json
COPY package-lock.json package-lock.json

COPY . .

# Remove node_modules
RUN rm -rf node_modules

RUN npm install
RUN npm run build 

# Expose application port
EXPOSE 5012

# Start the application
CMD ["node", "dist/server.js"]

