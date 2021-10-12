FROM node:12-alpine3.14

# Add a work directory
WORKDIR /app
COPY package*.json ./

# Cache and Install dependencies
RUN npm install
# RUN npm ci --only=production && npm cache clean --force
# If you are building your code for production

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD [ "node", "index.js" ]