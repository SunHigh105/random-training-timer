# Deployment heroku

## Enviroment
* Mac OSX 11.2.1

## Procedure

**Preparing heroku**
* Create heroku Account
* Install heroku
```
$ brew tap heroku/brew && brew install heroku
```

**Create Application**
```
$ heroku login
$ heroku create
```

**Setting Resouces and Config Vars**

* Go to https://dashboard.heroku.com/apps/{your_app_name}
* Select `Resources` tab and install below add-on
  * Heroku Postgres
* Select `Setting` tab and add below Buildpacks
  * heroku/php
  * heroku/nodejs
* Select `Setting` tab, click `Reveal Config Vars` button and add below Config Vars
  * APP_ENV
    * `production`
  * APP_DEBUG
    * `true`
  * APP_KEY
    * Setting `APP_KEY` in your local `.env` 
  * APP_URL
    * `https://{your_app_name}.herokuapp.com`
  * DATABASE_URL
    * Automatically set
  * DB_CONNECTION
    * `pgsql`
  * DB_HOST
    * `ec2-xxxx.compute-1.amazonaws.com`
  * DB_USERNAME
    * Decide for yourself
  * DB_PASSWORD
    * Decide for yourself
  * DB_PORT
    * `5432`

**Deploy**
* Deploy your application
```
$ git push heroku master
```

* (First deployment) Execute migration

```
$ heroku run php artisan migrate
```

* If you want to migration and seeding, execute below command
```
$ heroku run php artisan migrate --seed
```
