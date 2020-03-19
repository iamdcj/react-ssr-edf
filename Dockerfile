FROM mhart/alpine-node as base

FROM base as build
WORKDIR /src

ARG version=0.0.0-default.0

RUN apk add --no-cache curl

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src src
COPY public public
COPY .babelrc .babelrc
RUN echo "Building using the version : $version"
RUN npm version $version --no-git-tag-version --allow-same-version
RUN npm i
# RUN npm ci --only=production
RUN npm run build

#FROM base
#WORKDIR /app
HEALTHCHECK CMD curl --user SJP:Partner --fail http://127.0.0.1:3000/ || exit 1

CMD [ "npm", "run", "start:prod" ]