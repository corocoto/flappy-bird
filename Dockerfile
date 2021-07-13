FROM node:14-alpine
LABEL maintainer="gusev2014russia@mail.ru"
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY index.d.ts ./
COPY config config
COPY public public
COPY scripts scripts
COPY src src

RUN npm ci
RUN npm run local-build

CMD npx serve -s build
