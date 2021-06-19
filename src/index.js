import config from 'config';
import Server from './Server.js';
import routes from './routes/index.js';
//import config from "../config/default.cjs";
// console.log("cos");
// console.log(config.cors_options);
// console.log(config.public_routes_prefix);

const server = new Server(
    config.cors_options,
    config.options.public_routes_prefix,
    config.options.private_routes_prefix,
);
server.addRoutes(routes);
server.start(
    config.options.port,
    config.security.key_path,
    config.security.cert_path,
);

//TODO: handle async

server.addRoutes();