FROM node:22-alpine
WORKDIR /app
# Copy package.json and package-lock.json first to leverage Docker cache
COPY . .

CMD [ "node", "index.js" ]