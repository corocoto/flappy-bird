FROM node:14-alpine
LABEL maintainer="corocoto.art@gmail.com"
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
