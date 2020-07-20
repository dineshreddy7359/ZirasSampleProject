//mongodb+srv://DatabaseAccess:DbAccess123@cluster0-7kaii.mongodb.net/zirasMongoDB?retryWrites=true&w=majority'

module.exports = {
    secret: 'mean',
    clientId: 'xhLpk3gkmhEcG9kesJ0AX7e4NG3fwIgl',
    clientSecret: 'uqW0Xzqhwij-m67UKF7whvd5XDUPIYGwmDDcEHVkTcNbKaemAneFJtZGfZ4StQIo',
    mongoURI: 'mongodb+srv://DatabaseAccess:DbAccess123@cluster0-7kaii.mongodb.net/zirasMongoDB?retryWrites=true&w=majority',
    mongoCFG: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
        authSource: 'admin',
        retryWrites: true
    }
};
