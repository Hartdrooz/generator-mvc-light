// Controllers need to be imported to be discovered by the metadata
import './controllers/HomeController';

// Import web server
import { WebServer } from './webserver';

// Only those line are needed to start the server
const server = new WebServer();
server.start();
