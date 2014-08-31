class HomeController < ApplicationController
  def index
    I18n.locale = :administration
  end
end
