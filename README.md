# "Topics" MEAN stack web application

My first MEAN stack application using Angular 4, for the purpose of practicing/learning/showing.

## Including / Using
  - MongoDB official Node.js driver (nothing more)
  - Express API
  - JSON Web Tokens
  - Server side and client side sessions
  - Angular 4
  - Angular CLI

## Lacking
  - Error handling
  - Testing

**Please note that application is not completely done and there is lot of features I'm planning to implement in the future.**

### Running
Firstly, note that you have MongoDB service running on port 27017.

For the server-side stuff:

```sh
$ cd server
$ npm install
$ node index
```

For the client-side stuff (you will need the @angular/cli installed on your machine): 

```sh
$ cd client
$ npm install
$ ng build
```

If everything is working as expected you should see application running by navigating to server address using web browser.

```sh
127.0.0.1:5555
```