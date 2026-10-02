# API Contract Document

## Base Information
- Base URL: https://jsonplaceholder.typicode.com
- Protocol: HTTPS
- Content Type: application/json
- Authentication: None required for the tested endpoints
- Environment Note: The service is a mock/demo API and does not persist created resources across requests

## Common Response Expectations
- Success responses are returned as JSON
- Response headers should include content-type containing application/json
- Standard success status codes used in the tests:
  - 200 OK
  - 201 Created
  - 404 Not Found

## Endpoints Contract

### 1. GET /posts/{id}
**Purpose:** Retrieve a single post by ID

**Request**
- Method: GET
- URL: https://jsonplaceholder.typicode.com/posts/1

**Expected Response Status:** 200

**Response Body**
```json
{
  "userId": 1,
  "id": 1,
  "title": "string",
  "body": "string"
}
```

**Validation Rules**
- Response must contain `userId`
- Response must contain `id` equal to requested ID
- Response must contain `title`
- Response must contain `body`

---

### 2. GET /posts
**Purpose:** Retrieve all posts

**Request**
- Method: GET
- URL: /posts

**Expected Response Status:** 200

**Response Body**
```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "string",
    "body": "string"
  }
]
```

**Validation Rules**
- Response must be an array
- Array length must be greater than 0
- First object must contain `id` and `title`

---

### 3. GET /users/{id}
**Purpose:** Retrieve a single user

**Request**
- Method: GET
- URL: /users/1

**Expected Response Status:** 200

**Response Body**
```json
{
  "id": 1,
  "name": "string",
  "email": "string",
  "phone": "string"
}
```

**Validation Rules**
- Response must contain `id` equal to 1
- Response must contain `name`
- Response must contain `email`
- Response must contain `phone`
- Email format should match standard pattern

---

### 4. GET /posts/99999
**Purpose:** Validate 404 behavior for a non-existent resource

**Expected Response Status:** 404

---

### 5. POST /posts
**Purpose:** Create a new post

**Request**
- Method: POST
- URL: /posts
- Body:
```json
{
  "title": "Playwright Post Title",
  "body": "This is a test post body for API testing",
  "userId": 2
}
```

**Expected Response Status:** 201

**Response Body**
```json
{
  "id": 101,
  "title": "Playwright Post Title",
  "body": "This is a test post body for API testing",
  "userId": 2
}
```

**Validation Rules**
- Response must include generated `id`
- Response `title` should match request
- Response `body` should match request
- Response `userId` should match request

---

### 6. POST /comments
**Purpose:** Create a new comment

**Request**
- Method: POST
- URL: /comments
- Body:
```json
{
  "postId": 1,
  "name": "Test Comment",
  "email": "test@example.com",
  "body": "This is a test comment for the API"
}
```

**Expected Response Status:** 201

**Response Body**
```json
{
  "id": 501,
  "postId": 1,
  "name": "Test Comment",
  "email": "test@example.com",
  "body": "This is a test comment for the API"
}
```

---

### 7. POST /users
**Purpose:** Create a new user

**Request**
- Method: POST
- URL: /users
- Body:
```json
{
  "name": "Test User",
  "email": "testuser@example.com",
  "username": "testuser123"
}
```

**Expected Response Status:** 201

**Response Body**
```json
{
  "id": 11,
  "name": "Test User",
  "email": "testuser@example.com",
  "username": "testuser123"
}
```

---

### 8. PUT /posts/{id}
**Purpose:** Fully update an existing post

**Request**
- Method: PUT
- URL: /posts/1
- Body:
```json
{
  "id": 1,
  "title": "Updated by PUT",
  "body": "This post was updated with PUT",
  "userId": 1
}
```

**Expected Response Status:** 200

**Validation Rules**
- Response body should reflect the updated values
- `id` remains 1
- `title`, `body`, and `userId` match request data

---

### 9. PATCH /posts/{id}
**Purpose:** Partially update a post

**Request**
- Method: PATCH
- URL: /posts/1
- Body:
```json
{
  "title": "Updated Post Title"
}
```

**Expected Response Status:** 200

**Validation Rules**
- Response body should contain updated `title`
- Existing fields such as `body` should remain present

---

### 10. PATCH /users/{id}
**Purpose:** Partially update a user record

**Request**
- Method: PATCH
- URL: /users/2
- Body:
```json
{
  "email": "newemail@example.com",
  "phone": "1-234-567-8900"
}
```

**Expected Response Status:** 200

---

### 11. DELETE /posts/{id}
**Purpose:** Delete a post

**Request**
- Method: DELETE
- URL: /posts/1

**Expected Response Status:** 200

**Response Body**
```json
{}
```

---

### 12. DELETE /comments/{id}
**Purpose:** Delete a comment

**Request**
- Method: DELETE
- URL: /comments/1

**Expected Response Status:** 200

---

### 13. DELETE /users/{id}
**Purpose:** Delete a user

**Request**
- Method: DELETE
- URL: /users/1

**Expected Response Status:** 200

---

### 14. DELETE /posts/99
**Purpose:** Validate delete behavior for a non-existent resource

**Expected Response Status:** 200

**Expected Response Body**
```json
{}
```

---

## Notes and Observations
- JSONPlaceholder is a mock API and does not reliably persist newly created data for later GET/PATCH/DELETE operations
- The contract above reflects the behavior covered by the current Playwright tests
- For production APIs, add authentication, request headers, rate-limit expectations, and error schema details
