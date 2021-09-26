# https://www.pluralsight.com/guides/using-react.js-with-docker
FROM node:alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . ./

CMD ["npm", "start"]