require 'sinatra/base'

class App < Sinatra::Base

  # ROUTES
  get '/' do
    @rand_tagline = rand_tagline
    haml :"index/index", layout: true, local: @rand_tagline
  end

  not_found do
    haml :error
  end

  # FUNCTIONS
  def site_url
    "http://fernandoagar.cl/"
  end

  private
    def rand_tagline
      taglines = [
                    "Stargazer",
                    "Tea Drinker",
                    "Cat Lover",
                    "Full Time Geek",
                    "Starcraft 2 Player",
                    "Heroes of the Storm Player",
                    "ESL Admin",
                    "Diablo III Player",
                    "Outdoors Lover",
                    "Hobbit Footed",
                    "Bare footed walker",
                    "Rubik Solver"
                 ]

      taglines.sample
    end
end