FROM ruby:3.0.0
RUN apt-get update -qq
WORKDIR '/backend'
COPY Gemfile Gemfile.lock ./
RUN gem install bundler
RUN bundle install
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
COPY . .

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]