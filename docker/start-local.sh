#!/bin/bash

#start.sh

# Import environment variables
source .env.local

# start
docker-compose -f $DOCKER_COMPOSE_FILE -p $PROJECT_NAME up -d --build

sleep 5

# database table initialize
echo docker exec -i $DOCKER_DB_SERVICE mysql -u $DATABASE_USER -p$DATABASE_PASSWORD $DATABASE_NAME < $SQL_FILE
docker exec -i $DOCKER_DB_SERVICE mysql -u $DATABASE_USER -p$DATABASE_PASSWORD $DATABASE_NAME < $SQL_FILE
