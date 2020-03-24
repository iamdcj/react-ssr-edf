# Image
FROM mhart/alpine-node as base

# Define working directory
WORKDIR src 

# Copy Files (see ignore file)
COPY . .

# Set Environment Variables
RUN yarn dotenvi -s production

# Build application
RUN yarn

# Execute Application
CMD [ "yarn", "start:prod" ]