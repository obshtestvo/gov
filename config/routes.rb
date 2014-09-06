Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  post "sign", to: "supporter#create"
  root 'home#index'
end
