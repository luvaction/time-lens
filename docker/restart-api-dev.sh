#!/bin/bash

#restart-api.sh

# Import environment variables
source .env.dev

echo $ENV
# Rebuild and restart API server
docker-compose -f $DOCKER_COMPOSE_FILE -p $PROJECT_NAME build $DOCKER_API_SERVICE
docker-compose -f $DOCKER_COMPOSE_FILE -p $PROJECT_NAME up -d $DOCKER_API_SERVICE
docker logs -f $DOCKER_API_SERVICE