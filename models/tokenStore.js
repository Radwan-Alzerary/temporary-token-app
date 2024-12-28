// models/tokenStore.js
const tokens = new Map();

function storeToken(token, expirationTime) {
    tokens.set(token, { expiresAt: expirationTime });
}

function getToken(token) {
    return tokens.get(token);
}

function deleteToken(token) {
    tokens.delete(token);
}

module.exports = {
    storeToken,
    getToken,
    deleteToken
};
