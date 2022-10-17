FROM node:slim AS build

COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD ["npm","run","preview"]
