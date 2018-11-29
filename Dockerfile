FROM node:8-alpine

WORKDIR '/app'

COPY package*.json ./
RUN npm ci
COPY ./ ./

CMD ["npm","start"]
