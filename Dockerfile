
FROM node:12-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . /app
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]