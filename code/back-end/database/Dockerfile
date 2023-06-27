FROM ubuntu:20.04

# repo update
RUN apt-get update

# Install MariaDB
RUN apt-get install -y mariadb-server

# add SQL file
ADD ./init.sql /docker-entrypoint-initdb.d/

# my.cnf 세팅
RUN echo lower_case_table_names=1 >> /etc/mysql/my.cnf
RUN echo default-time-zone='+9:00' >> /etc/mysql/my.cnf
RUN echo collation-server = utf8mb4_unicode_ci >> /etc/mysql/my.cnf
RUN echo collation-server = utf8mb4_0900_ai_ci >> /etc/mysql/my.cnf
RUN echo character-set-server = utf8mb4 >> /etc/mysql/my.cnf
RUN echo skip-character-set-client-handshake >> /etc/mysql/my.cnf

EXPOSE 3306