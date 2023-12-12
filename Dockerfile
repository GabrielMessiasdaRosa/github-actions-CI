FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Run the app
CMD [ "npm", "run", "start:dev" ]