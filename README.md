# node-rest-frontend

Basic Structure using node and express like server and frontend (ORM Sequalize integrated)

# Install node dependecies
  * sudo apt install npm node  
  * cd node-rest-frontend
  * npm install

# Starting Project
  * node server.js (Server will be able at localhost:8080 by default)

# Documentation
  * Project Structure
    * node-rest-frontend
      * config
        * database.js (db configurations sequalize)
      * node_modules (node packages)
      * routes (heres where the router goes)
        * api.js (Routes for api)
        * client.js (Routes for client)
      * views (heres where templates goes)
         * welcome.html (template example)
      * package.json
      * server.js (our server)
      
  - [x] localhost:8080 (Client Side)
  - [x] localhost:8080/api/v1 (Rest Side)
                    
  * Database
    * Configuration located in folder config database.js (http://docs.sequelizejs.com/en/v3/)
    * Support:
      - [x] PostgreSQL
      - [x] MySQL
      - [x] MariaDB
      - [x] SQLite
      - [x] MSSQL
