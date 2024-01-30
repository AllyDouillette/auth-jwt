const jwt = require('jsonwebtoken');

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
const createToken = (payload, secretorprivatekey) => jwt.sign(payload, secretorprivatekey)

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
const createTokenWithExpiry = (payload, secretorprivatekey, expiry) => jwt.sign(payload, secretorprivatekey, { expiresIn: expiry } )

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
const verifyToken = (token, secretorprivatekey) => {
    try {
        return jwt.verify(token, secretorprivatekey) 
    } catch {
        return false
    }
}

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken
}