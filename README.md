# HRCRM
A solution to prospect and engage talents.
## Requirements

  - [node 16](https://nodejs.org/en/),  being able to use [NVM](https://github.com/nvm-sh/nvm).
  - [yarn](https://yarnpkg.com/getting-started/install).
  - [docker](https://docs.docker.com/engine/install/) e [docker-compose](https://docs.docker.com/compose/install/).
## how to develop
### initial setup
- clone repository
    ```
    git clone git@github.com:instruct-br/hrcrm.git
    ```
- create environment
	```
	cp .env.sample .env
	```
- Install app dependence
	```
	yarn install
	```
- Install worker dependence
	```
	cd worker && yarn install
	```
- create a databases and file system
	```
	docker-compose build
	```
### Running
- run a databases and file system
	```
	docker-compose up -d
	```
- Start development server
	```
	yarn dev
	```
- Start worker
	```
	cd worker && yarn dev
	```
## Deploy
	TODO
## Testing
	TODO

