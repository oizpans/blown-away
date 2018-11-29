FROM node:8-alpine

WORKDIR '/app'

RUN apk update && apk add git
COPY package*.json ./
RUN npm ci
COPY ./ ./

CMD ["npm","start"]
