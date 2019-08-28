# nodejs-mssql_connector

Thanks for checking out my take on setting up NodeJS to connect to a MS SQL database.  If you see anything that could be changed to make this more efficient please let me know.

To install and get up and running make sure you have the latest version of NodeJS installed (http://nodejs.org) and GIT (https://git-scm.com).

For testing you may want to get a copy of postman to send your various get/post/etc. requests.  It's a very useful tool for testing your express server. (https://www.getpostman.com)

Here are a few commands you will need to perform to get up and running.  First, you will clone the repository from my GitHub account.  Next, you will need to run a clean install to ensure all dependancies are added (npm ci).  Lastly, you will run the project with node.

    prompt:> git clone https://github.com/jwwheeleriv/nodejs-mssql_connector.git

    prompt:> npm ci

    prompt:> node app.js

A few things to consider:

1. You will need to have access to a Microsoft SQL server.  I develop on a Mac so I have a docker container set up and use that to connect to for local development. Check out https://hub.docker.com/_/microsoft-mssql-server as a starting point and remember google is your friend!  Also I am calling a stored proc verses running an inline SQL query.  There are differences and you would have to create your own proc on your own db if you go that route.

2. I used some global environment variables to setup passwords for my connect to the SQL server.  The passwords are contained in the configs/secrets/ folder.  Each file beneath that will be the password in base64 encoding.  We basically want to obfuscate the plain text password; however, this is by no means secure and can be easily be converted back and forth. Check out https://www.base64encode.org and https://www.base64decode.org.

3. Make sure to update the connector file ( connectors/db.js ) config object with your own SQL server config details.

4. This by no means has robust logging and using console.log while good for initial debugging is not good practice in production environments.  Checkout http://www.elastic.co for using the more robust elastic (ELK) stack.


That should be the gist of it.  Good luck and may the force be with you!

~Jay W.


