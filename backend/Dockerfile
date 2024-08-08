FROM node:16.20.1

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
