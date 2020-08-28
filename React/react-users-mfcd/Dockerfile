FROM node:12.14.0-alpine3.11

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent

USER node

COPY . /app

WORKDIR /app

EXPOSE 3000

# start app
CMD ["npm", "start"]
