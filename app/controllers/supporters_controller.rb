class SupportersController < ApplicationController
  respond_to :html, :js

  def new
    @supporter = Supporter.new
  end

  def create
    supporter = Supporter.new(supporter_params)

    if supporter.save
      @success       = true
      @supporter     = Supporter.new
      flash[:notice] = 'Благодарим Ви, че подкрепихте каузата!' unless request.xhr?
    else
      @supporter     = supporter
    end

    respond_with supporter, location: root_path
  end

  def verify
    verification_code = params[:code]
    secret_key_base = Rails.application.secrets.secret_key_base
    verifier = ActiveSupport::MessageVerifier.new(secret_key_base)

    begin
      id = verifier.verify(verification_code)
    rescue ActiveSupport::MessageVerifier::InvalidSignature
      flash[:alert] = "Невалиден персонален код."
      redirect_to root_path
    end

    s = Supporter.find(id)

    if s.email_confirmed?
      flash[:notice] = "Вие вече подкрепихте инициативата."
    else
      flash[:notice] = "Благодарим Ви, че потвърдихте вашият имейл. Вие вече подкрепяте инициативата."
      s.email_confirmed = true
      s.save
    end

    redirect_to root_path
  end

  private

  def supporter_params
    params.require(:supporter).permit(:first_name, :last_name, :email, :area, :organization, :is_organization)
  end
end
