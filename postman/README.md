# Postman Collection

This directory contains the Postman collection for testing the Portfolio API.

## Import Instructions

1. Open Postman
2. Click "Import" button (top left)
3. Select `Portfolio_API.postman_collection.json`
4. The collection will be imported with all endpoints

## Environment Variables

The collection uses the following variables:
- `base_url`: `http://localhost:5000/api` (default)
- `token`: Automatically set after login/signup

## Testing Flow

1. **Sign Up** or **Login** to get an authentication token
2. The token will be automatically saved to the `token` variable
3. Use protected endpoints (they will automatically include the token)
4. Test all CRUD operations for projects
5. Submit contact forms and view messages

## Endpoints Included

### Authentication
- Sign Up
- Login
- Get Current User

### Projects
- Get All Projects
- Get Single Project
- Create Project (Protected)
- Update Project (Protected)
- Delete Project (Protected)

### Contact
- Submit Contact Form
- Get All Messages (Protected)
- Mark Message as Read (Protected)

### User
- Get User Profile (Protected)

### Health Check
- Health Check endpoint

## Notes

- Protected endpoints require authentication
- The token is automatically included in requests after login/signup
- Update the `base_url` variable if your API is hosted elsewhere

