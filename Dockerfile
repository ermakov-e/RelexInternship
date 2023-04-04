FROM ${CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX}/node:19.8.1-slim AS BUILD
WORKDIR /app
COPY ./package.json ./
RUN npm install -g npm@latest && npm i
COPY ./ ./
RUN npm run build

FROM ${CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX}/nginx:1.22.1
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=BUILD /app/dist /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]