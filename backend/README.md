# TRACKIT

The rails/postgres backend for the trackit app.

## Additional Steps for Apple M1 Machines

1. Make sure that you are runnning Ruby 2.6.8 (`ruby -v`)
1. Install ImageMagick `brew install imagemagick imagemagick@6 --build-from-source`

## Setup

1. Run `bundle install` to install dependencies
2. Create `config/database.yml` by copying `config/database.example.yml`
3. Run `rake db:reset` to create, load and seed db
4. Run `rails s` to start the server
5. Go to `localhost:3000` to see the server running

## Dependencies

- Rails 6.1 [Rails Guide](http://guides.rubyonrails.org/v6.1/)
- PostgreSQL 9.x
