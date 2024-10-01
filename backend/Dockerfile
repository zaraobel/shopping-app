FROM node:14

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install PostgreSQL client to use psql
RUN apt-get update && apt-get install -y postgresql-client

# Copy app code
COPY . .

# Copy the seed script to the container
COPY seed.sh /app/seed.sh

# Make the seed script executable
RUN chmod +x /app/seed.sh

# Expose the application port
EXPOSE 5000

# Use the seed script as the entrypoint
ENTRYPOINT ["/app/seed.sh"]

# Run the backend server
CMD ["npm", "start"]
