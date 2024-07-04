const {logger} = require('../logger');
const {checkAccessToken} = require('../utils/tokenFunctions');

module.exports = function(roles) {
    return function(req, res, next) {
        if (req.methods === "OPTIONS") {
            return next();
        }

        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json('Пользователь не авторизован')
            }
            const {roles: userRoles} = checkAccessToken(token)
            let hasRole = false
            userRoles.forEach( role => {
                if (roles.includes(role)) {
                    hasRole = true
                }
            })
            if (!hasRole) {
                return res.status(403).json({message: 'У пользователя нет доступа'})
            }
            next();
        } catch (e) {
            logger.error(e);
            return res.status(403).json('У пользователя нет прав')

        }
    }
}