# 🌊 authenticate 
Authentication built from scratch with CSRF (Cross-Site Request Forgery) security middleware, database validations, and error-catching.

## Built With
- `bcryptjs` - password hashing
- `cookie-parser` - parsing cookies from requests
- `csurf` - CSRF (Cross-Site Request Forgery) middleware, checks that all requests contain the correct `_csrf` cookie in their header to ensure that requests only come from authorized sites 
- `express-async-handler` - handling `async` route handlers
- `express-validator` - validation of request bodies
- `helmet` - security middleware for Express apps
- `jsonwebtoken` - JWT
- `cors` - CORS (Cross-Origin Resource Sharing - used during development only since frontend and backend are served from different servers)
- `morgan` - logging information about server requests/responses
- Sequelize
- Express
- PostgreSQL

## Running locally 
```
cd backend 
npm install 
npm start

cd frontend 
npm install 
npm start
```

