FROM node:carbon
LABEL maintainer="gabriel.vinha@ccc.ufcg.edu.br"

WORKDIR /

COPY package*.json ./

COPY lunch.js /

RUN npm install
