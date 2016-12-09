require 'spec_helper'
require 'capybara/rspec'
require 'capybara/dsl'
require 'byebug'

RSpec.configure do |config|
  config.include Capybara::DSL
end

Capybara.configure do |config|
  config.default_driver = :selenium
  config.run_server = false 
  config.server_port = 8100
  config.app_host = "http://localhost:#{Capybara.server_port}"
end