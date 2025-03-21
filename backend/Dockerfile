# Use Node.js base image
FROM node:20.15.0-alpine as builder
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY package.json package.json
COPY package-lock.json package-lock.json

# Copy wait-for-it.sh script to /usr/local/bin
COPY wait-for-it.sh /usr/local/bin/wait-for-it

# Make the wait-for-it.sh script executable
RUN chmod +x /usr/local/bin/wait-for-it

# Make sure your entire backend code is copied
COPY . .  

# Remove node_modules
RUN rm -rf node_modules

RUN npm install
RUN npm run build

# Expose application port
EXPOSE 5012

# # Start the application after ensuring db is ready
# CMD ["wait-for-it", "db:3306", "--", "npm", "start"]

# Use the script properly in the command
CMD ["sh", "-c", "/usr/local/bin/wait-for-it db:3306 --timeout=30 -- npm start"]
