FROM node:8.10.0

WORKDIR /usr/src/app
COPY package.json /usr/src/app

RUN npm install --loglevel verbose

CMD ["npm", "start"]
