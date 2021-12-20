FROM node:16
WORKDIR /usr/src/app
CMD ["./run-app.sh"]
EXPOSE 3333/tcp

COPY package.json .
COPY yarn.lock .
COPY prisma ./prisma/
RUN yarn install --production --ignore-scripts
RUN node node_modules/@prisma/client/scripts/postinstall

COPY run-app.sh ./
COPY dist/ ./
COPY public/ ./public
COPY server/ ./server
