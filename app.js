/**
 * Core Modules of Node.js:
 * 
 * 1. http: The `http` module allows Node.js to transfer data over the HyperText Transfer Protocol (HTTP). It provides functionalities to create HTTP servers and make HTTP requests.
 * 
 * 2. https: Similar to the `http` module, the `https` module provides functionalities for transferring data over HTTP but with an added layer of security using SSL/TLS. It allows creating HTTPS servers and making HTTPS requests.
 * 
 * 3. fs: The `fs` module, short for File System, provides an API for interacting with the file system on your computer. It allows you to read, write, modify, and manipulate files and directories.
 * 
 * 4. path: The `path` module provides utilities for working with file and directory paths. It helps in resolving and manipulating file paths in a cross-platform manner, regardless of the operating system.
 * 
 * 5. os: The `os` module provides operating system-related utility methods and properties. It allows you to retrieve information about the operating system, such as CPU architecture, memory, network interfaces, and platform. It also provides methods for working with paths, hostname, and user information.
 */
const http = require('http');
// import http from 'http';


const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
});
server.listen(3000);