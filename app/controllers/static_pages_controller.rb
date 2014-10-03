class StaticPagesController < ApplicationController
  helper_method :changeName

  require 'json'
  require 'net/http'

  def home
  end

end
