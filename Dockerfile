# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package*.json yarn.lock ./

# Install the app dependencies using yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the Nest.js app will run
EXPOSE 3000

# Start the Nest.js app
CMD [ "yarn", "run", "start:prod" ]
