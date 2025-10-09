FROM node:22
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
# Install dependencies
RUN npm ci
# Copy the source code
COPY src/index.js index.js
# Expose the application port
EXPOSE 3000
# Start the application
CMD [ "npm", "start" ]