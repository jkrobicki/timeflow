FROM node:slim AS build

COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
RUN npm run preview
#CMD ["npm","run","preview"]

#FROM nginx:1.23.1-alpine
#COPY --from=build /app/src /usr/share/nginx/html
