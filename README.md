# charzWeb - React Application

A React + Vite web application integrated into the Eveth Labs Platform.

## Architecture

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS 4.x
- **Routing**: React Router DOM
- **Build**: Multi-stage Docker build with nginx

## Docker Configuration

### Production Build
The application uses a multi-stage Dockerfile:
1. **Stage 1**: Builds the React app using Node.js
2. **Stage 2**: Serves the built static files using nginx

### Access
- **URL**: http://charzweb.localhost
- **Port**: 80 (internal)
- **Routing**: Through Traefik reverse proxy

## Development

### Local Development (Outside Docker)
```bash
cd app/charzweb
npm install
npm run dev
```

### Build and Deploy
The application is automatically built and deployed when you run:
```bash
cd /home/vk-eveth/eveth-labs-platform
docker-compose up -d charzweb
```

### Rebuild After Changes
```bash
docker-compose build charzweb
docker-compose up -d charzweb
```

## Features

- Server-side rendering ready
- React Router for SPA navigation
- Responsive design with Tailwind CSS
- Optimized production build
- Nginx with gzip compression
- Security headers configured

## Configuration

### Nginx
The nginx configuration includes:
- SPA routing support (all routes point to index.html)
- Gzip compression for assets
- Cache headers for static files
- Security headers

### Environment
No environment variables are currently required for the frontend.

## Integration with Eveth Labs Platform

The application is fully integrated with:
- **Traefik**: Reverse proxy routing via charzweb.localhost
- **eveth-net**: Connected to the platform's Docker network
- **Monitoring**: Can be monitored via Prometheus/Grafana

## Troubleshooting

### Build Issues
If you encounter build issues:
```bash
docker-compose logs charzweb
```

### Clear and Rebuild
```bash
docker-compose down
docker-compose build --no-cache charzweb
docker-compose up -d charzweb
```

### Access Issues
Ensure your `/etc/hosts` file includes:
```
127.0.0.1 charzweb.localhost
```
