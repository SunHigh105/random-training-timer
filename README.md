# Random Training Timer

## App URL
* heroku
  * https://fast-gorge-86686.herokuapp.com/

## Requirements
* Node.js
* Composer
* Docker for Mac

## Setup Development Environment (for Mac OSX)
* Copy `.env.example` and rename `.env`
* Generate `APP_KEY`
```
php artisan key:generate
```

* Execute below command
```
./vendor/bin/sail up
```

* You can access http://localhost

## Start/Stop Development Environment
* Start
  * `resorces/public/js/index.js` will be created after 1-2 minutes
  * If you want to create `index.js` quickly, please execute `yarn dev`
```
$ docker-compose up -d
```

* Stop
```
$ docker-compose down
```

* You can access http://localhost

## Deployment for Production
* [Deployment heroku](https://github.com/SunHigh105/random-training-timer/blob/develop/README/deployment_heroku.md)
