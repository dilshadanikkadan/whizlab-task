# Project Architecture

## Overview

This inventory management system follows a clean architecture pattern with clear separation of concerns. The backend is built with Node.js and TypeScript, organized into distinct layers to maintain code clarity and testability. The frontend uses React with a component-based architecture for building a responsive user interface.

```
Frontend (React) 
```

## Backend Structure

```
server/
├── src/
│   ├── boot/                    # Application bootstrap
│   │   ├── config.ts           # Environment configuration
│   │   ├── database.ts         # MongoDB connection setup
│   │   └── server.ts           # Express server initialization
│   │
│   ├── apps/
│   │   └── inventory/
│   │       ├── api/            # API Layer
│   │       │   ├── controllers/  # Request handlers
│   │       │   └── routes/      # API endpoints
│   │       │
│   │       ├── domain/         # Business Logic Layer
│   │       │   ├── models/     # Database models
│   │       │   └── services/   # Business logic
│   │       │
│   │       └── lib/           # Shared Resources
│   │           ├── types/     # TypeScript interfaces
│   │           └── utils/     # Helper functions
│   │
│   └── test/                  # Test Suite
│       ├── actions/           # Test helpers
│       └── config/            # Test configuration
```

## Key Architectural Components

1. **API Layer** - Controllers handle HTTP requests and route them to appropriate services
```typescript
class InventoryController {
  constructor(private inventoryService: InventoryService) {
    this.buildInventory = this.buildInventory.bind(this);
  }

  async buildInventory(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.inventoryService.buildInventory(req.body);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}
```

2. **Service Layer** - Implements business logic and orchestrates data operations
```typescript
class InventoryService {
  constructor(private repository: InventoryRepository) {}

  async buildInventory(data: InventoryDto) {
    return this.repository.createNewInventory(data);
  }
}
```

3. **Data Layer** - Handles database operations using the repository pattern
```typescript
class InventoryRepository {
  constructor(private readonly inventoryModel: typeof InventoryModel) {}

  async createNewInventory(payload: InventoryDto) {
    const newInventory = new this.inventoryModel({
      ...payload,
    });
    return await newInventory.save();
  }
}
```

4. **Error Handling** - Centralized error management for consistent error responses
```typescript
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
```

## Frontend Architecture

The React frontend follows a component-based architecture:

```
client/
├── src/
    ├── components/    # Reusable UI components
    ├── pages/         # Route-level components
    ├── hooks/         # Custom React hooks
    ├── services/      # API integration
    └── utils/         # Helper functions
```

## Testing Strategy

The project uses Jest and Supertest for integration testing, focusing on API endpoints and business logic:

```typescript
describe('Inventory API', () => {
  it('returns 200 if getting all inventories', async () => {
    await request(app)
      .post("/inventory")
      .send({
        itemName: "hp lap",
        price: 76666,
        quantity: 1,
        category: "Laptops",
        description: "this is good"
      })
      .expect(201);

    const response = await request(app)
      .get('/inventory')
      .expect(200);
      
    expect(response.body).toBeTruthy();
    expect(Array.isArray(response.body)).toBe(true);
  });
});
```

## Deployment

The application uses Docker for containerization and GitHub Actions for CI/CD:

```yaml
# Example GitHub Actions workflow
name: CI/CD
on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test
```