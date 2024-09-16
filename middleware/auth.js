function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        next(); // User is an admin, proceed to the next middleware or route handler
    } else {
        res.status(403).json({ message: 'Access denied, admin only.' });
    }
}

// import jwt from "jsonwebtoken";

// function isAdmin(req, res, next) {
//     const token = req.headers['authorization'];

//     if (!token) return res.status(401).json({ message: 'No token provided.' });

//     jwt.verify(token, 'your-secret-key', (err, decoded) => {
//         if (err) return res.status(500).json({ message: 'Failed to authenticate token.' });

//         if (decoded.role === 'admin') {
//             next();
//         } else {
//             res.status(403).json({ message: 'Access denied, admin only.' });
//         }
//     });
// }

export default isAdmin;