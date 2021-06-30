# syntax=docker/dockerfile:1

FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --save --legacy-peer-deps

COPY . .

ENV PORT=2000

EXPOSE 2000

CMD ["npm", "start"]