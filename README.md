# EthereumBA Web project #

## First steps & general Info ##
This project include the following:

  *  Nginx container as a web server
  *  Python Django container for the backend
  *  React JS container for the frontend
  *  PostgreSQL container for the database

First steps:

  1.  Modify and copy the environment file:
      ```bash
      $ cp .env.template
      $ cp frontend/.env.template frontend/.env
      ```
  2.  Modify and copy the local_settings file:
      ```bash
      $ cp backend/backend/local_settings.py.tpl backend/backend/local_settings.py
      ```
  3.  Build and run the project
     ```
     $ make deploy
     ```


## Docker & make instructions ##
To deploy locally or remotely you'll need [docker-compose](https://docs.docker.com/compose/install/) and [docker-engine](https://docs.docker.com/engine/installation/linux/ubuntulinux/)


Once set up you can run `make [tab][tab]` to see a list of actions:

  *  `make deploy` to build, scale and deploy containers on the server
  *  `make build` to initially build the containers
  *  `make up` to deploy the containers
  *  `make stop` to turn off containers
  *  `make clean` to remove the containers
  *  `make shell-'container'` to drop into that container's shell
  *  `make log-'container'` to get a full log of the container
  *  `make collectstatic` yes, exactly that!
  *  `make migrate` yes, exactly that!
  *  `make makemigrations` yes, exactly that!

Normally you'll only run `make build` only once in a while, `make up` every time you start your env.
`make collectstatic` only if statics were changed or added, and `make migrate` only if there are new migrations or you have a brand new db.

## Get in touch ##
  * [Twitter](https://twitter.com/ethereumba)
  * [Meetup](https://www.meetup.com/ethereum-ba/)
  * [Telegram](https://t.me/ethbuenosaires)
  * [Youtube](https://ethereumba.com/youtube)
