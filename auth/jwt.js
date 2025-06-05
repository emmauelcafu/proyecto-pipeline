const {jwt} =require('jsonwebtoken');

const SECRET_KEY = 'tu_clave_secreta'; // Cambia esto por una clave segura

// Generar un token
 function generateToken(payload, expiresIn = '1h') {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verificar un token
 function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }
}

// Middleware para Express
 function jwtMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Token requerido' });
    }
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ message: 'Token inválido' });
    }
    req.user = decoded;
    next();
}

module.exports = {
    generateToken,
    verifyToken,
    jwtMiddleware
};