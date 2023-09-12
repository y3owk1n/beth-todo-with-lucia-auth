FROM oven/bun
WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
RUN bun build
COPY . .
EXPOSE 3000
CMD ['bun', 'start']
