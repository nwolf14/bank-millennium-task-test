ARG ENV
FROM node:16.13.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . /usr/src/app

RUN npm install

CMD [ "npm", "run", "start" ]
