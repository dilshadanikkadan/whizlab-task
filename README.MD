# WhizLab Inventory Management System 📦

![WhizLab Inventory Dashboard](https://raw.githubusercontent.com/yourusername/whizlab-inventory/main/docs/dashboard-preview.png)

[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)](https://github.com/features/actions)

A modern inventory management system built with TypeScript, React, and Node.js. Features a clean architecture, automated testing, and CI/CD pipeline.

## 📂 Project Structure

```
whizlab-task/
├─ server/                # Backend
│  ├─ src/
│  │  ├─ boot/           # Application bootstrap
│  │  │  ├─ config.ts
│  │  │  ├─ database.ts
│  │  │  └─ server.ts
│  │  ├─ test/          # Integration tests
│  │  │  ├─ actions/
│  │  │  └─ config/
│  │  └─ apps/
│  │     └─ inventory/
│  │        ├─ api/     # Controllers & Routes
│  │        ├─ domain/  # Business Logic
│  │        └─ lib/     # Shared utilities
├─ client/               # Frontend
│  ├─ src/
│  │  ├─ components/    # Reusable UI components
│  │  ├─ pages/         # Page components
│  │  ├─ hooks/         # Custom hooks
│  │  ├─ services/      # API services
│  │  └─ utils/         # Utility functions
├─ .github/
│  └─ workflows/        # CI/CD configurations
└─ docker/              # Docker configurations
```

## 🎯 Key Features

- **Type-Safe Development**: Full TypeScript implementation
- **Clean Architecture**: Organized code structure with separation of concerns
- **Error Handling**: Centralized error management with custom error classes
- **Automated Testing**: Integration tests with Jest and Supertest
- **CI/CD Pipeline**: Automated deployment using GitHub Actions
- **Containerization**: Docker support for consistent environments
- **Responsive UI**: Mobile-friendly interface with reusable components

## 💾 Database Design

```typescript
// Inventory Schema
interface IInventory {
  itemName: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🚀 Implementation Details

### Backend Controller (TypeScript)
```typescript
class InventroryController {
  constructor(private inventroryService: InventroryService) {
    this.buildInventory = this.buildInventory.bind(this);
    // ... other method bindings
  }

  public async buildInventory(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    try {
      const response = await this.inventroryService.buildInventory(body);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}
```

### Repository Pattern
```typescript
class InventroryRepository {
  constructor(private readonly inevntoryModel: typeof InventoryModel) {}

  public async createNewInventory(payload: InventroyDto): Promise<any> {
    const newInventory = new this.inevntoryModel({
      ...payload,
    });
    await newInventory.save();
    return newInventory;
  }
}
```

### Error Handling
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

### Integration Tests
```typescript
it('returns 200 if getting all inventories which added', async () => {
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
```

## 🛠️ Setup & Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/whizlab-inventory.git
cd whizlab-inventory
```

2. Install dependencies
```bash
# Backend
cd server
npm install

# Frontend
cd client
npm install
```

3. Set up environment variables
```bash
# Backend
cp .env.example .env

# Frontend
cp .env.example .env
```

4. Run the application
```bash
# Development mode
# Backend
npm run dev

# Frontend
npm start
```

## 🐳 Docker Deployment

```bash
# Build and run containers
docker-compose up -d

# Stop containers
docker-compose down
```

## 📊 CI/CD Pipeline

The project uses GitHub Actions for:
- Automated testing
- Code quality checks
- Docker image building
- Deployment to staging/production

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Tests
        run: |
          npm install
          npm test
```

## 🧪 Testing

```bash
# Run integration tests
npm run test

# Test with coverage
npm run test:coverage
```

## 🎨 Frontend Features

- **Type-Safe Components**: Built with TypeScript and React
- **State Management**: Using React Context and Hooks
- **Reusable UI Components**: Modular design system
- **Loading States**: Skeleton loaders for better UX
- **Error Boundaries**: Graceful error handling
- **Responsive Design**: Mobile-first approach

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Deployment

The application is containerized using Docker and can be deployed to any cloud platform supporting Docker containers.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For detailed contribution guidelines, please see [CONTRIBUTING.md](CONTRIBUTING.md)