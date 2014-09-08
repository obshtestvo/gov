class ApplicationMailer < ActionMailer::Base

  def verify_email(supporter)
    @supporter = supporter
    skb = Rails.application.secrets.secret_key_base
    verifier = ActiveSupport::MessageVerifier.new(skb)
    @token = verifier.generate(@supporter.id)
    mail(to: @supporter.email, subject: "Потвърждение на подкрепата за кампания „Отворен код в държавата“")
  end

end
