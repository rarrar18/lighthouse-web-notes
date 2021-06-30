# Intro to Networking

## Instructor: Christian Nally
<br>

Devices are often hooked up to a nearby router that connects to the internet. Different servers are connected to client interfaces and establish a connection. Web servers are connected to physical servers to deliver messages from huge databases.

**Examples of networks:**

1. PC Ring network
2. Multiple laptops and smartphones linked to a home router
3. Individual desktop PCs and company phones linked to a router

---

### TCP - Transport Control Protocol

Much like a mail carrier system, **TCP** is like the internet's package forwarding system. Servers send multiple packets to clients which arrive at different times and can take different routes. These messages are then re-assembled at the final destination to form a complete message.

<br>

FTP - File Transfer Protocol <br>
HTTP - Hypertext Transfer Protocol <br>
DNS - Domain Name Search

<br>

Internet browsers attempt to convert website names into IP addresses using a DNS server. Once it has this number, it connects to the server with that address. If the request is accepted, then the server responds with websites composed of HTML, CSS, and JS. If using the same machine, using the localhost address with 127.0.01 allows developers to test client/server functions within one computer.

---

### Server/Client Communication

We can build a small chat system using the Node package `net`. The `server.on()` and `server.listen()` functions are run asynchronously and can be put into the file in any order. We are scheduling tasks on an event loop.

The port number we use is connected to the server. When the client is connected, the server's callbacks are called. When the client receives the server's messages, the client's callbacks are called.

<br>

**Steps to establish a connection:**

1. Require net, set up a port number, and create a server

```javascript
const net = require('net'); // Utilizes Node's `net` module
const port = 3000; // or 8088
const server = net.createServer(); // Creates a server object
```
<br>

2. Create server.on() and server.listen() methods

```javascript
// First parameter to the `on` function call is an event name, second is a cb that runs once a client connects
server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Welcome to my server!');
});
// Takes in a port number and a callback
server.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
```
<br>

3. Require net and create a client object (set up host and port)

```javascript
const net = require('net');
// Creates a client object that takes in a single parameter as an object with key-value pairs
const conn = net.createConnection({ 
  host:'10.0.0.5', // change to IP address of computer ('localhost' or 127.0.0.1 to call itself) or ngrok host
  port: 3000 // or change to the ngrok port if tunneling
});
```
<br>

4. Create client.on() method that writes a client introduction message to the server

```javascript
conn.on('connect', () => {
  conn.write('Hello from client!');
});
```
<br>

5. Create a standard input method to pass on any new client messages to the server

```javascript
// When input is typed in, cb is called to write to server
process.stdin.on('data', (data) => {
  conn.write(data);
})
```
<br>

6. Create client.on() methods that and takes in server data

```javascript
// Takes in parameters for data and cb with a message
conn.on('data', (data) => {
  console.log('Server says: ', data);
});
```
<br>

7. Within server.on(), take in the client's messages

```javascript
server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Welcome to my server!');

  client.setEncoding('utf8'); // interpret data as text
  client.on('data', (data) => {
    console.log('Message from client: ', data)
    broadcast(data);
  });
});
```
<br>

8. Create a function to handle broadcasting messages to all connected clients

```javascript
const connectedClients = [];

const broadcast = (data) => {
  // loop over all connected clients and write the message to each (by adding a reference to the client on a list)
  for (let cClient of connectedClients) {
    cClient.write(data);
    console.log('sending message!');
  }
};
```
<br>

9. Create en events to check if clients were disconnected from the server

```javascript
// client.js
conn.on('end', () => {
  console.log(`client is disconnected from server`);
});
// server.js (within server.on())
client.on('end', () => {
    console.log(`client is disconnected from server`);
  });

```
<br>

---

### URL: Uniform Resource Locator
<br>

![URL](https://miro.medium.com/max/1400/1*O2QB8zBNMs7SN44AhGdPrg.png)

URLs are made up of [several parts](https://medium.com/@joseph.pyram/9-parts-of-a-url-that-you-should-know-89fea8e11713):

1. Protocol

2. Sub-domain

3. Domain name

4. Top-level domain

5. Port

6. Path

7. Query

8. Parameters

9. Fragment

<br>

Each request that goes through a web server has a head and a body. There are GET and SET requests. There are [status codes](https://http.cat/) like 404: Not found.


(& is used to separate key-value pairs)
