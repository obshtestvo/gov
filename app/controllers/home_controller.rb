class HomeController < ApplicationController
  def index
    @type = "administration"
    @supporter = Supporter.new(area: @type)
  end
end
