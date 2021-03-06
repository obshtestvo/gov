Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :supporters
  get '/verify/:code', to: 'supporters#verify', as: :verify_supporter
  get ':area' => 'home#index', constraints: { area: /people|administration|it/ }, as: :home
  root 'home#index', :defaults => { :area => "people" }
end
