Rails.application.routes.draw do
  root 'application#index'
  get '/wolverine' => 'application#wolverine' 
  get '/miketyson' => 'application#miketyson'
  get '/raiden' => 'application#raiden'
  get '/humantorch' => 'application#humantorch'
end
