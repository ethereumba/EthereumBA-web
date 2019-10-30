FROM node:8.10.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --silent

# Bundle app source
COPY . /usr/src/app

# Build and optimize react app
# RUN npm run build

# Expor Port
EXPOSE 3000
