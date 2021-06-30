# syntax=docker/dockerfile:1

FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --save --legacy-peer-deps

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]