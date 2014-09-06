class SupporterController < ApplicationController
  def create
    @supporter = Supporter.new(supporter_params)


    respond_to do |format|

      if @supporter.save
        format.html { redirect_to @supporter, notice: 'Badge was successfully created.' }
        format.json { render :show, status: :created, location: @supporter }
      else
        format.html { render "home/index" }
        format.json { render json: @supporter.errors, status: :unprocessable_entity }
      end
    end

  end

  private

  def supporter_params
    params.permit(:first_name, :last_name, :email, :sphere, :organization, :supporter_kind)
  end
end
