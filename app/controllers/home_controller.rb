class HomeController < ApplicationController
  def index
    @area = home_params[:area]
    @supporter = Supporter.new(area: @area)
  end

  private

  def home_params
    params.slice(:area)
  end
end
