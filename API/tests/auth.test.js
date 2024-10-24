const request = require('supertest');

// Set the base URL of the external API
const BASE_URL = 'http://localhost:3000/api/v1';

let token;  // Will be used for authenticated requests
let validEmail = 'test@example.com';
let validPassword ='password123';
let newUserEmail = 'newuser11@example.com'

describe('External API Routes', () => {
    // Run before all tests to create a user and get a valid authentication token
    beforeAll(async () => {
        try {
            const res = await request(BASE_URL)
                .post('/users')
                .set('Content-Type', 'application/json')
                .send({ email: validEmail, password: validPassword });

            if (res.statusCode === 201 || res.statusCode === 200) {
                console.log('User created successfully before tests:', res.body);
            } else {
                console.error('Failed to create user before tests:', res.body.error || res.body.message || res.statusCode);
            }
        } catch (error) {
            console.error('Error during user creation before tests:', error.message);
        }
        try {
            const res = await request(BASE_URL)
                .post('/auth')
                .set('Content-Type', 'application/json')  // Ensure correct content-type
                .send({
                    email: validEmail,
                    password: validPassword
                });

            if (res.statusCode === 200 && res.body.token) {
                token = res.body.token;  // Store the token for subsequent requests
                console.log('Successfully authenticated, token:', token);
            } else {
                console.error('Failed to authenticate:', res.body.error || res.statusCode);
                throw new Error(`Failed to authenticate before tests: ${res.body.error || res.statusCode}`);
            }
        } catch (error) {
            console.error('Error during setup:', error.message);
            throw error;  // Rethrow to fail the setup
        }
    });

    // Test cases for POST /auth - Authenticate User
    describe('POST /auth - Authenticate User', () => {
        it('should authenticate with valid credentials', async () => {
            const res = await request(BASE_URL)
                .post('/auth')
                .send({ email: validEmail, password: validPassword });

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('token');
        });

        it('should fail with invalid credentials', async () => {
            const res = await request(BASE_URL)
                .post('/auth')
                .send({ email: validEmail, password: 'wrongpassword' });

            expect(res.statusCode===401 || res.statusCode===403).toBeTruthy();
            expect(res.body).toHaveProperty('message', 'Incorrect email or password');
        });

        it('should fail with missing fields', async () => {
            const res = await request(BASE_URL)
                .post('/auth')
                .send({ email: validEmail });  // Missing password

            expect(res.statusCode).toBe(400);
            expect(res.body).toHaveProperty('error', 'Missing required fields');
        });
    });

    // Test cases for POST /users - Create User
    describe('POST /users - Create User', () => {
        it('should create a user with valid data', async () => {
            const res = await request(BASE_URL)
                .post('/users')
                .send({ email: newUserEmail, password: validPassword });

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('message', 'User created successfully');
        });

        it('should fail with existing email', async () => {
            const res = await request(BASE_URL)
                .post('/users')
                .send({ email: validEmail, password: validPassword });

            expect(res.statusCode).toBe(409);
            expect(res.body).toHaveProperty('error', 'User already exists');
        });

        it('should fail with missing fields', async () => {
            const res = await request(BASE_URL)
                .post('/users')
                .send({ email: 'incomplete@example.com' });  // Missing password

            expect(res.statusCode).toBe(400);
            expect(res.body).toHaveProperty('error', 'Missing required fields');
        });
    });

    // Test cases for GET /users - Get User
    describe('GET /users - Get User', () => {
        it('should get user with valid token', async () => {
            const res = await request(BASE_URL)
                .get('/users')
                .set('Authorization', `${token}`);

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('email', validEmail);
        });

        it('should fail with invalid token', async () => {
            const res = await request(BASE_URL)
                .get('/users')
                .set('Authorization', 'invalidtoken');

            expect(res.statusCode===401 || res.statusCode===403).toBeTruthy();
            expect(res.body).toHaveProperty('message', 'Unauthorized');
        });

        it('should fail without token', async () => {
            const res = await request(BASE_URL)
                .get('/users');

            expect(res.statusCode===401 || res.statusCode===403).toBeTruthy();
            expect(res.body).toHaveProperty('message', 'Unauthorized');
        });
    });

    // Test cases for PATCH /users - Update User
    describe('PATCH /users - Update User', () => {
        it('should update user with valid token', async () => {
            const res = await request(BASE_URL)
                .patch('/users')
                .set('Authorization', `${token}`)
                .send({ password: 'newvalidPassword' });

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('message', 'User updated with success!');
        });

        it('should fail with invalid token', async () => {
            const res = await request(BASE_URL)
                .patch('/users')
                .set('Authorization', 'invalidtoken')
                .send({ password: 'newvalidPassword' });

            expect(res.statusCode===401 || res.statusCode===403).toBeTruthy();
            expect(res.body).toHaveProperty('message', 'jwt malformed');
        });
    });

    // Test cases for DELETE /users - Delete User
    describe('DELETE /users - Delete User', () => {
        it('should delete user with valid token', async () => {
            const res = await request(BASE_URL)
                .delete('/users')
                .set('Authorization', `${token}`)

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('message', 'User deleted with success!');
        });

        it('should fail with invalid token', async () => {
            const res = await request(BASE_URL)
                .delete('/users')
                .set('Authorization', 'invalidtoken');

            expect(res.statusCode===401 || res.statusCode===403).toBeTruthy();
            expect(res.body).toHaveProperty('message', 'Unauthorized to delete');
        });
    });

    // Test cases for DELETE /users - Delete All Users
    describe('DELETE /users - Delete All Users', () => {
        it('should delete all users without authorization but with key admin', async () => {
            const res = await request(BASE_URL)
                .delete('/all-users')
                .send({"key_admin": "keyadmin123"});

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('message', 'Users deleted with success');
        });

        it('should fail without key admin', async () => {
            const res = await request(BASE_URL)
                .delete('/all-users');

            expect(res.statusCode===401 || res.statusCode===403).toBeTruthy();
            expect(res.body).toHaveProperty('message', 'Unauthorized access');
        });
    });
});
