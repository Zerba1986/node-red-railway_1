module.exports = {
    uiPort: process.env.PORT || 3000,
    uiHost: "0.0.0.0",

    credentialSecret: "minha-chave-secreta",

    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2b$08$K1Qp0lQx7QpZ8l8G5YzFJe7Yg3zVQ9b7xKQv1Y7JQ0z7Xz6zK1y6G",
            permissions: "*"
        }]
    },

    editorTheme: {
        projects: {
            enabled: true
        }
    }
}
