FROM cypress/included
WORKDIR /app
COPY ./env.mjs /app/env.mjs
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
RUN yarn install --frozen-lockfile
EXPOSE 5000
COPY . .
CMD ["yarn", "ci"]