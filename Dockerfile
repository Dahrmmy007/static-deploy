# To-do: add description.

ARG baseimage="node:23-alpine"

FROM ${baseimage}

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD [ "node", "index.js" ]