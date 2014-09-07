class ApplicationMailer < ActionMailer::Base
  default from: "info@obshtestvo.bg"

  def verify_email(supporter)
    @supporter = supporter
    mail(to: @supporter.email, subject: "Моля потвърдете подкрепата си за кампанията.")
  end

end
