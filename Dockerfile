FROM mhart/alpine-node as base

WORKDIR src

COPY package*.json yarn.lock
RUN yarn
COPY . .
RUN yarn dotenvi -s production


CMD [ "yarn", "start:prod" ]