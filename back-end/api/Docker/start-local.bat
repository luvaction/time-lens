:: start-local.bat

SET PROJECT_NAME=my

docker-compose -p %PROJECT_NAME% -f docker-compose.local.yml down --volumes
rd /s /q "..\database\volumes\local\db\data"
rd /s /q "..\database\volumes\local\db\backup"
docker-compose -p %PROJECT_NAME% -f docker-compose.local.yml up -d --build --force-recreate

