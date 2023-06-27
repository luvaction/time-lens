FROM mariadb:10.4

# Install the necessary packages
RUN apt-get update && apt-get install -y mariadb-client

# Copy the SQL initialization file
COPY ./volumes/local/db/initdb.d /docker-entrypoint-initdb.d
RUN chmod 755 /docker-entrypoint-initdb.d/init.sql

# Copy charset.cnf file
COPY ./volumes/local/db/conf.d/charset.cnf /etc/mysql/conf.d/charset.cnf

# Copy docker.cnf file and set proper permissions
COPY --chown=mysql:mysql ./volumes/local/db/conf.d/docker.cnf /etc/mysql/conf.d/docker.cnf
RUN chmod 644 /etc/mysql/conf.d/docker.cnf

# Add debug lines
RUN ls -l /etc/mysql/conf.d/
RUN id mysql

EXPOSE 3306
