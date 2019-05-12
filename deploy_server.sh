#! /bin/bash

# docker build -t dramane/abb:latest .
# docker push dramane/abb:latest

yarn build:server
heroku container:push --app=abb web
heroku container:release --app=abb web
