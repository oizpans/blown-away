FROM node:8-alpine
# FROM node:10.14.0-alpine

WORKDIR '/app'

COPY package*.json ./
RUN npm ci
COPY ./ ./

CMD ["npm","start"]
