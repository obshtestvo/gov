class SupportersController < ApplicationController
  respond_to :html, :js

  def new
    @supporter = Supporter.new
  end

  def create
    @supporter = Supporter.create(supporter_params)

    if @supporter.valid? and !request.xhr?
      flash[:notice] = 'Благодарим Ви, че подкрепихте каузата!'
    end

    respond_with @supporter, location: root_path
  end

  private

  def supporter_params
    params.require(:supporter).permit(:first_name, :last_name, :email, :area, :organization, :is_organization)
  end
end
