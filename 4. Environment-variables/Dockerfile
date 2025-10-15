FROM node:22-alpine
WORKDIR /app

COPY package*.json .
RUN npm ci
COPY . .

ENV PORT=5000
ENV App_NAME="New App"

CMD [ "node", "src/index.js" ]