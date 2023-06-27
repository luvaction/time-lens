@echo off

REM dangling 이미지 가져오기
FOR /f "tokens=*" %%i IN ('docker images --filter "dangling=true" -q') DO (
    REM 이미지 삭제
    docker rmi -f %%i
)

REM dangling 이미지 확인
docker images --filter "dangling=true"
