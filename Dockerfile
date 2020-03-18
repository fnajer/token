FROM node:12.14-alpine

RUN apk add util-linux build-base

WORKDIR /usr/src/app

COPY package.json ./package.json
RUN npm install -g gatsby-cli
RUN gatsby telemetry --disable
RUN npm install

COPY ./ ./
RUN gatsby build

COPY entrypoint.sh /sbin/entrypoint.sh
RUN chmod +x /sbin/entrypoint.sh

EXPOSE 9000

CMD ["/sbin/entrypoint.sh"]
