require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    @rand_tagline = rand_tagline
    @rand_lead    = rand_lead
    haml :index, layout: true, local: [@rand_tagline, @rand_lead]
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

    def rand_lead
      leads = [
                "I love what i do and i get paid to do it :D.",
                "I code for a living :D.",
                "Sometimes i see real life in code, just like in The Matrix.",
                "...did you know coders are the best lovers?<br> ...and i'm one, so... love me.",
                "I like to think of myself as a Hi-Tech Hippie."
              ]

      leads.sample
    end
end