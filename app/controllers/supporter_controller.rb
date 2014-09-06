class SupporterController < ApplicationController
  def create
    @supporter = Supporter.new(supporter_params)
    @supporter.kind = supporter_params[:kind].blank? ? "person" : "organization"

    respond_to do |format|
      if @supporter.save
        format.html { redirect_to root_url, notice: 'Благодарим Ви, че подкрепихте каузата!' }
        format.json { render :show, status: :created, location: @supporter }
      else
        format.html { render "home/index" }
        format.json { render json: @supporter.errors, status: :unprocessable_entity }
      end
    end

  end

  private

  def supporter_params
    params.require(:supporter).permit(:first_name, :last_name, :email, :area, :organization, :kind)
  end
end
