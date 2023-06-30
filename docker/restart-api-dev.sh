#!/bin/bash

#restart-api.sh

# Import environment variables
source .env.dev

# Rebuild and restart API server
docker-compose -f $DOCKER_COMPOSE_FILE -p $PROJECT_NAME build tl-api-dev
docker-compose -f $DOCKER_COMPOSE_FILE -p $PROJECT_NAME up -d tl-api-dev
docker logs -f tl-api-dev