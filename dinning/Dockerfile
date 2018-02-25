FROM node:carbon
LABEL maintainer="gabriel.vinha@ccc.ufcg.edu.br"

WORKDIR /

COPY package*.json ./

COPY dinner.js /

RUN npm install
