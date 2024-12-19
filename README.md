# NestJS Backend Project 🚀

A powerful and scalable NestJS backend application with MongoDB integration, JWT authentication, and comprehensive testing setup.

## 🛠️ Tech Stack

- **Runtime**: Node.js v22.12.0
- **Framework**: NestJS v10.0.0
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Testing**: Jest
- **Documentation**: Built-in Swagger/OpenAPI

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v22.12.0)
- npm (v10.9.0)
- MongoDB (running instance)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nest-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your environment variables:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### 🏃‍♂️ Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod

# Debug mode
npm run start:debug
```

## 📝 Available Scripts

- `npm run build` - Build the application
- `npm run format` - Format code using Prettier
- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot-reload
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start in production mode
- `npm run lint` - Lint the code
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:cov` - Generate test coverage report
- `npm run test:debug` - Debug tests
- `npm run test:e2e` - Run end-to-end tests

## 🏗️ Project Structure

```
src/
├── auth/                 # Authentication module
├── common/              # Shared resources
│   ├── decorators/
│   ├── guards/
│   ├── interfaces/
│   └── pipes/
├── config/              # Configuration files
├── database/            # Database configuration
├── modules/             # Feature modules
├── main.ts             # Application entry point
└── app.module.ts       # Root module
```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Request validation using class-validator
- MongoDB injection protection

## 🧪 Testing

The project includes a comprehensive test suite:

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📚 Dependencies

### Main Dependencies
- @nestjs/common: ^10.0.0
- @nestjs/config: ^3.3.0
- @nestjs/jwt: ^10.2.0
- @nestjs/mongoose: ^10.1.0
- bcryptjs: ^2.4.3
- class-validator: ^0.14.1
- mongoose: ^8.9.1

### Development Dependencies
- @nestjs/cli: ^10.0.0
- @nestjs/testing: ^10.0.0
- jest: ^29.5.0
- typescript: ^5.1.3

## 🔍 Code Quality Tools

- ESLint for code linting
- Prettier for code formatting
- Jest for testing
- TypeScript for type safety

## 📈 Performance Optimization

- Proper use of async/await
- Database connection pooling
- Caching strategies (when implemented)
- Request validation optimization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the UNLICENSED license.

## 🛟 Support

For support, please open an issue in the repository or contact the project maintainers.

## 🔄 Version History

- 0.0.1
  - Initial Release
  - Basic project setup
  - Authentication implementation
  - MongoDB integration

---

⭐️ **Found this project useful? Give it a star!** ⭐️