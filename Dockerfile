# Use Node.js LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json first for caching
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy all backend files
COPY backend/ .

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "src/app.js"]   # ✅ points to correct path inside container
