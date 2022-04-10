#!/bin/sh
cd backend && rake db:reset
cd .. && docker-compose up --build