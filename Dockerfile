FROM node:alpine

WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY . /usr/src/app

RUN npm install --production

EXPOSE 1337
ENTRYPOINT ["npm", "install"]