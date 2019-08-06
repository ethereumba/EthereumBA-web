#eth-buenos-aires#

## First steps & general Info ##
This template include the following:

  *  basic django requirements
  *  docker yml files for local development, testing server and production server
  *  common css and js files located in `core/static`

First steps:

  *  modify and copy the environment file `cp docs/env.txt .env`
  *  modify and copy the local_settings file `cp backend/backend/local_settings.py.tpl backend/backend/local_settings.py`
  *  modify `yml` files, including: container names and DEFAULT_HOST
  *  Build and run the project


## Docker & make instructions ##
To deploy locally or remotely you'll need [docker-compose](https://docs.docker.com/compose/install/) and [docker-engine](https://docs.docker.com/engine/installation/linux/ubuntulinux/)
You can just copy and paste the following commands:

```bash
sudo apt-get install apt-transport-https ca-certificates
sudo apt-get install linux-image-extra-$(uname -r) linux-image-extra-virtual
wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker $USER
sudo curl -L "https://github.com/docker/compose/releases/download/1.9.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Once set up you can run `make [tab][tab]` to see a list of actions:

  *  `make deploy` to build, scale and deploy containers on the server
  *  `make build` to initially build the containers
  *  `make scale` now would be a nice time to scale
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
