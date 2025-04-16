# auto-generated Dockerfile
FROM oven/bun:1 AS prod

WORKDIR /app

COPY bun.lock /app/
COPY package.json /app/
RUN bun install --frozen-lockfile

COPY . /app

ENV NODE_ENV=production
CMD ["bun", "src/index.ts"]