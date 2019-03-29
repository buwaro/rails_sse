class HomeController < ApplicationController
  def index
  end

  def send_message
    title = params[:message][:title]
    description = params[:message][:description]
    SseRailsEngine.send_event('test', { title: title, description: description })
  end
end
