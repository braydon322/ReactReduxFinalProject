Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :emails

      post '/api/v1/emails', to: 'emails#create'
      patch '/api/v1/emails/:id', to: 'emails#update'
    end
  end
end
