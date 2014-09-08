class ApplicationMailer < ActionMailer::Base
  default from: "info@obshtestvo.bg"

  def verify_email(supporter)
    @supporter = supporter
    skb = Rails.application.secrets.secret_key_base
    verifier = ActiveSupport::MessageVerifier.new(skb)
    @token = verifier.generate(@supporter.id)
    mail(to: @supporter.email, subject: "Моля потвърдете подкрепата си за кампанията.")
  end

end
