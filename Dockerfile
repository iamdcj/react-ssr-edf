FROM mhart/alpine-node as base

WORKDIR src

COPY package*.json yarn.lock
RUN yarn
COPY . .

CMD [ "yarn", "start:prod" ]