const winston = require('winston');

const logger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
        winston.format.json(),
        winston.format.colorize({ all: true }),
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        winston.format.simple(),
    ),
    transports: [new winston.transports.Console()],
});

module.exports = {logger}