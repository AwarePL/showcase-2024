# Project Documentation

## Overview

This is a Mocha and Chai api testing example testing both REST and GrapQL endpoints.

## Test scenarios:
### REST:
#### E2E:
1. Expect all characters found in episode 1 exist in characters endpoint
#### Smoke:
1. Expect to find at least 19 episodes on first page
2. Expect first episode to have a name 'Pilot' and ep code 'S01E01'"
3. Expect to last page to have correct amount of episodes, next page to be null and prev current page -1
4. Expect to return error 'There is nothing here.' for method [POST, PUT, PATCH, DELETE]
5. Expect to return error 'Episode not found' for invalid episode id
6. Expect to return error 'Hey! you must provide an id' for invalid episode id
### GraphQL:
#### E2E:
1. Query Characters endpoint for character named 'Evil Summer Clone' expect to find same character with same name and image in Character endpoint using found id
#### Smoke:
1. Expect to find Rick Sanchez on list of characters
2. Expect results count to be at least 20
3. Expect info to contain page count of more than 1 for more than 20 resaults
4. Query page id as a string, expect to get 'Expected type Int' error message
5. Query filter.name string as a number, expect to get 'Expected type String' error message
6. Query info.count as null, expect to get 'Unknown argument' error message


## Installation

### Prerequisites

1. Install node.js version 18.\*
2. Install yarn package manager: `npm install yarn` in latest version
3. create .env in root folder `{
  "graphQl": "https://rickandmortyapi.com/graphql",
  "rest": "https://rickandmortyapi.com/api/"
}`

### Project instalation

1. Install all dependencies: `yarn install`

## Usage

This project can be run localy in headed and headless mode or via docker

### Local run
- `yarn run test:graphQl` for GraphQL suite
- `yarn run test:rest` for Rest suite

### Docker

#### REST
-   `docker build --tag 'rest' .`
-   `docker run --detach 'rest'`
#### GraphQL
-   `docker build --tag 'gql' .`
-   `docker run --detach 'gql'`
