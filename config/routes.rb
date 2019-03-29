Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount SseRailsEngine::Engine, at: '/sse'
  root 'home#index'
  match 'send_message', to: 'home#send_message', via: [:get, :post]
end
