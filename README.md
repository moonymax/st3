# My SolidStart Starter Template

This project is my custom ***SolidStart*** starter project. It has a full **Auth** flow with email based login.

## Websockets

This template includes a basic websocket server. However the websocket server is incompatible with any serverless functions and can only be used with the default (nodejs) adapter.
The websocket server is a singleton which gets instantiated upon the first request and stays alive for the entire lifecycle of the server.
The client side websocket is also a singleton which stays alive as long as navigation happens through the client side router.

## User Auth

I am using ***nodemailer*** to send a verification email with a token that can satisfy the challenge created by the server.
The entire process is password less for user convenience and to prevent password reuse.

## Improvements

In future **Authentication** will be done using ***Auth.js***.
