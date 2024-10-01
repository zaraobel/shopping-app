#!/bin/bash

# Wait for PostgreSQL to be ready
export PGPASSWORD="$POSTGRES_PASSWORD"
until psql -h "$POSTGRES_HOST" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\q'; do
  echo "Postgres is unavailable - sleeping"
  sleep 2
done

echo "Postgres is up - executing command"

# Run the node script to seed the database
node seed.js

# Start the application
exec "$@"
