# Test to Toolbox

This project has backend and frontend code.

# Code by [Cristian Ronda](https://cristian-ronda.tk/)

Download mi CV in [English](https://drive.google.com/file/d/1lNS7rxWYMPI0VZE_N6r-Tvcuf5A5DzLu/view?usp=sharing) or [Spanish](https://drive.google.com/file/d/1yqMxkDStiRhP4MTA_QC-zWoguQw1Lb9U/view?usp=sharing)

# Structure

## Backend

The code is on server/ folder

- index: has API with GET and POST methods
- utils: has a methods that format or verify data in APIS
- test: has a test API

## Frontend

The code is on src/ folder

- App.test.js: has testing of frontend
- components: UI components in page
- hooks: hooks into project
- redux: reducers, actions types and store of redux
- services: API services
- utils: has a methods that format request APIs

# How to run

## Docker

```docker
docker-compose up
```

## Manual

1. Install dependencies

```bash
    yarn install

    or

    npm i
```

2. Run command

```bash
    yarn start
```

3. Run command

```bash
    cd server && yarn server:dev
```

4. Go to localhost:3000

# Run tests

## Backend

```bash
    yarn test:server
```

## Frotend

```bash
    yarn test
```
