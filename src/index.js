const { createToken,
  createTokenWithExpiry,
  verifyToken
} = require('./token')

// DATA
const payload = {
  "id": 153,
  "username": "sanchez",
  "email": "rick@sanchez.com",
  "role": "ADMIN"
}

const secret = "87764d1a-92dc-4ced-a758-9c898c31d525";

// CREATE TOKENS
const token = createToken(payload, secret);
console.log(token);

// 24 hours = 86400 seconds
const tokenWithExpiry = createTokenWithExpiry(payload, secret, 86400)
console.log("tokenWithExpiry:", tokenWithExpiry)

// VERIFY TOKENS
const decodedPayload = verifyToken(token , secret);
console.log('decodedPayload', decodedPayload)

const decodedPayloadWithExpiry = verifyToken(tokenWithExpiry, secret);
console.log('decodedPayloadWithExpiry ', decodedPayloadWithExpiry)