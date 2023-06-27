#!/bin/bash

PROJECT_NAME=my

docker-compose -p $PROJECT_NAME -f docker-compose.local.yml down --volumes
rm -rf ../database/volumes/local/db/data
rm -rf ../database/volumes/local/db/backup
docker-compose -p $PROJECT_NAME -f docker-compose.local.yml up -d --build
# docker-compose -p $PROJECT_NAME -f docker-compose.local.yml up -d --build --force-recreate
