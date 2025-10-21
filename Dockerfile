# charzWeb/Dockerfile

# Stage 1: Build the application
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY app/charzweb/package*.json ./

# Install dependencies with proper permissions
RUN npm install --legacy-peer-deps

# Copy application source
COPY app/charzweb/ ./

# Build the application using npx to ensure proper binary execution
RUN npx vite build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

