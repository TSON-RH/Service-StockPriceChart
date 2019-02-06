FROM node:11-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
EXPOSE 3001
CMD [ "node", "server/index.js" ]