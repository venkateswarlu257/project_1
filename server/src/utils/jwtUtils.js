import jwt from 'jsonwebtoken';
const SECRET_KEY = 'your_secret_key';

const generateToken = (user) => {
    let payload = {
        id : user?.id,
        username:user?.username,
        email:user?.email,
        role:user?.role
    }
    return jwt.sign(payload,"MY_SECRET_TOKEN")
    // return jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }
};

export { generateToken, verifyToken };
