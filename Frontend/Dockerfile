### STAGE 1: BUILD ###

FROM node:14.17-alpine AS build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build --prod

### STEP 2: RUN ###

FROM nginx:1.20-alpine AS prod-STAGE

COPY --from=build /app/dist/Frontend /usr/share/nginx/html

EXPOSE 80

CMD [  "nginx", "-g", "daemon off;" ]