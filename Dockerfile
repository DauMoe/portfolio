FROM node:alpine as base
COPY . /portfolio
WORKDIR /portfolio
CMD npm run dev