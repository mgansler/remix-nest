FROM node:16-alpine
WORKDIR /usr/src/app
CMD ["node", "main"]
EXPOSE 3333/tcp

COPY package.json .
COPY yarn.lock .
RUN yarn install --production --ignore-scripts

COPY dist/ ./
COPY public/ ./public
COPY server/ ./server
