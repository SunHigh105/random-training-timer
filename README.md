# Random Training Timer

## App URL
  * https://fast-gorge-86686.herokuapp.com/

## Requirements
* Node.js
* Composer
* Docker for Mac

## Setup Development Environment (for Mac OSX)
* Download Composer
  * https://getcomposer.org/download/
* Execute below command
```
composer install
```
* Copy `.env.example` and rename `.env`
* Generate `APP_KEY`
```
php artisan key:generate
```
* Rewrite `.env` settings
```bash
DB_HOST=random-training-timer_mysql_1 # container name
DB_DATABASE={Your own database name}
DB_USERNAME={Your own username}
DB_PASSWORD={Your own password}
```
* Execute below command
```
./vendor/bin/sail up
```
* You can access http://0.0.0.0/


* Execute migrate and make seeder in laravel container

```bash
docker exec -it random-training-timer_laravel.test_1 bash
php artisan migrate
php artisan db:seed
```

* (If you want to check mysql container, execute below commands)
```bash
docker exec -it random-training-timer_mysql_1 bash
mysql -h mysql -u {DB_USER_NAME} -p
# type DB_PASSWORD
```

## Start/Stop Development Environment
* Start
  * `resorces/public/js/index.js` will be created after 1-2 minutes
  * If you want to create `index.js` quickly, please execute `yarn dev`
```bash
docker-compose up -d
```

* Stop
```bash
docker-compose down
```

* You can access http://localhost

## Deployment for Production
* [Deployment heroku](https://github.com/SunHigh105/random-training-timer/blob/develop/README/deployment_heroku.md)
