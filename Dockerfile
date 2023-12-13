FROM node:20.10.0-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Run the app
CMD [ "npm", "run", "start:dev" ]