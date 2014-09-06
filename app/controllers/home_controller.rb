class HomeController < ApplicationController
  def index
    @type = "administration"
    @supporter = Supporter.new
  end
end
