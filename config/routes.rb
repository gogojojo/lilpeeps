Rails.application.routes.draw do
  root 'application#index'
  get '/wolverine' => 'application#wolverine' 
  get '/miketyson' => 'application#miketyson'
end
