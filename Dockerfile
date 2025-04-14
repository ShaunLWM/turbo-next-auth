FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

#--- Development Base ---
FROM base AS deps
WORKDIR /usr/src/app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

#--- Development API ---
FROM deps AS api-dev
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./ 
COPY apps/api ./apps/api
WORKDIR /usr/src/app/apps/api
EXPOSE 5001
CMD [ "pnpm", "run", "dev" ]

#--- Development App ---
FROM deps AS app-dev
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./ 
COPY apps/app ./apps/app
WORKDIR /usr/src/app/apps/app
EXPOSE 5173
CMD [ "pnpm", "run", "dev" ]

#--- Production Build ---
FROM base AS build
ENV NODE_ENV=production
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r --filter=!web build
RUN pnpm deploy --filter=api --prod /prod/api

#--- Production App ---
FROM base AS app
ENV NODE_ENV=production
RUN npm install -g serve
WORKDIR /app
COPY --from=build /usr/src/app/apps/app/dist /app/dist
EXPOSE 8000
CMD ["npx", "serve", "-s", "dist", "-l", "8000"]

#--- Production API ---
FROM base AS api
ENV NODE_ENV=production
COPY --from=build /prod/api /prod/api
WORKDIR /prod/api
EXPOSE 5002
CMD [ "pnpm", "start" ]