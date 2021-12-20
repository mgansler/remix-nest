FROM node:16
WORKDIR /usr/src/app
CMD ["./run-app.sh"]
EXPOSE 3333/tcp

# Install dependencies
COPY package.json .
COPY yarn.lock .
# We don't to run `remix setup node` but we want to generate the prisma client
RUN yarn install --production --ignore-scripts

# Generate prisma client
COPY prisma ./prisma/
RUN node node_modules/@prisma/client/scripts/postinstall

COPY run-app.sh ./
COPY dist/ ./
COPY public/ ./public
COPY server/ ./server
