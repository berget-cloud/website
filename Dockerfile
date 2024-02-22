# Use an official Node.js runtime as the base image
FROM node:20 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the application
RUN npm run build

# Use an official Nginx runtime as the base image
FROM nginx:latest

# Copy the built application from the previous stage to the Nginx default public directory
COPY --from=dist /app/build /usr/share/nginx/html

# Expose a port for the application to listen on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
