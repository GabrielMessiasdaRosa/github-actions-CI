FROM node:20

WORKDIR /usr/src/app

USER root

COPY package*.json ./

RUN npm install

COPY . .

# Run the app
CMD [ "npm", "run", "start:dev" ]