# Marriage Backend

This project is a simple backend application that serves a "Hello World" response. It is built using TypeScript and follows a basic structure for easy understanding and extensibility.

## Project Structure

```
marriage-backend
├── src
│   ├── main.ts                # Entry point of the application
│   ├── controllers            # Contains controller files
│   │   └── helloController.ts # Controller for handling hello requests
│   ├── routes                 # Contains route definitions
│   │   └── index.ts           # Main route setup
│   └── types                  # Type definitions
│       └── index.ts           # Request and response types
├── tests                      # Contains test files
│   └── hello.test.ts          # Unit tests for HelloController
├── package.json               # NPM package configuration
├── tsconfig.json              # TypeScript configuration
├── .env.example               # Example environment variables
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd marriage-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Access the service:**
   Open your browser and navigate to `http://localhost:3000` to see the "Hello World" response.

## Testing

To run the tests, use the following command:

```bash
npm test
```

This will execute the unit tests defined in the `tests` directory.

## Environment Variables

You can create a `.env` file in the root directory based on the `.env.example` file to configure environment-specific variables.

## License

This project is licensed under the MIT License.