require File.expand_path('../boot', __FILE__)

require "active_model/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"

Bundler.require(*Rails.groups)

module Gov
  class Application < Rails::Application
    config.time_zone = 'Sofia'
    config.site_domain = 'gov.obshtestvo.bg'
    config.i18n.available_locales = [:bg]
    config.i18n.default_locale = :bg

    config.action_mailer.default_url_options = Settings[Rails.env].action_mailer.default_url_options
    config.action_mailer.delivery_method = Settings[Rails.env].action_mailer.delivery_method
    config.action_mailer.default_options = Settings[Rails.env].action_mailer.default_options
  end
end
