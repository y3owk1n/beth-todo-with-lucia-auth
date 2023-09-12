FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install
RUN bun prepare

COPY src src
COPY tsconfig.json .
COPY public public

ENV NODE_ENV production

CMD ['bun', 'start']

EXPOSE 3000
