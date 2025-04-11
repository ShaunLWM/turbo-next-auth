FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r --filter=!web build
RUN pnpm deploy --filter=api --prod /prod/api

FROM base AS app
RUN npm install -g serve
WORKDIR /app
COPY --from=build /usr/src/app/apps/app/dist /app/dist
EXPOSE 8000
CMD ["npx", "serve", "-s", "dist", "-l", "8000"]

FROM base AS api
COPY --from=build /prod/api /prod/api
WORKDIR /prod/api
EXPOSE 5001
CMD [ "pnpm", "start" ]