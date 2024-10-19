FROM node:18

WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the root directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the app directory
COPY . .

# Build the application (if necessary)
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
