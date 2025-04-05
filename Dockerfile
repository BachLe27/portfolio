# Build phase
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Serve phase
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy default nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
