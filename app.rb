require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    @rand_tagline = rand_tagline
    haml :"index/index", layout: true, local: @rand_tagline
  end

  private
    def rand_tagline
      taglines = [
                    "Stargazer",
                    "Tea Drinker",
                    "Cat Lover",
                    "Full Time Geek",
                    "Starcraft Player",
                    "Diablo III Player",
                    "Outdoors Lover",
                    "Hobbit Footed"
                 ]

      taglines.sample
    end
end