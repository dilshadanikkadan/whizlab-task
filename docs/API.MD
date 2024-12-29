# 🔌 API Documentation

## Base URL
```
http://localhost:5000/api/inventory
```

## Endpoints

### 📋 Get All Inventory Items
```http
GET /
```
**Response**: List of all inventory items
```json
[
  {
    "id": "1",
    "itemName": "HP Laptop",
    "price": 76666,
    "quantity": 1,
    "category": "Laptops",
    "description": "this is good",
    "createdAt": "2024-01-01T10:00:00Z",
    "updatedAt": "2024-01-01T10:00:00Z"
  }
]
```

### 🔍 Get Single Inventory Item
```http
GET /:id
```
**Response**: Single inventory item details
```json
{
  "id": "1",
  "itemName": "HP Laptop",
  "price": 76666,
  "quantity": 1,
  "category": "Laptops",
  "description": "this is good",
  "createdAt": "2024-01-01T10:00:00Z",
  "updatedAt": "2024-01-01T10:00:00Z"
}
```

### ➕ Create Inventory Item
```http
POST /
```
**Request Body**:
```json
{
  "itemName": "HP Laptop",
  "price": 76666,
  "quantity": 1,
  "category": "Laptops",
  "description": "this is good"
}
```
**Response**: Created inventory item

### 📝 Update Inventory Item
```http
PUT /:id
```
**Request Body**:
```json
{
  "itemName": "HP Laptop Updated",
  "price": 76666,
  "quantity": 2,
  "category": "Laptops",
  "description": "this is good"
}
```
**Response**: Updated inventory item

### 🗑️ Delete Inventory Item
```http
DELETE /:id
```
**Response**: Success message

## Error Responses
All endpoints return error responses in this format:
```json
{
  "errors": [
    {
      "message": "Error message here"
    }
  ]
}
```

[View Full Documentation →](./docs/api/README.md)