# Players
class Player 
    attr_accessor :name, :hand, :bankroll

    def initialize name, hand, bankroll
        @name = name
        @bankroll = 100
        @hand = []
    end

end

#Players Create
human = Player.new "Human", [], 100
computer = Player.new "Computer", [], 1000

#Cards
class Card
    attr_accessor :face, :value, :suit
   
    def initialize face, value, suit
        @face = face
        @suit = suit
        @value = value
    end
end

#Deck
#create deck of 52 cards
class Deck
    def initialize
        @faces = ["clubs", "spades", "hearts", "diamonds"]
        @suits = [*(2..10), "jack", "queen", "king", "ace"]
        @cards = []
    end

#Loop through each face
#Loop through each suit for that face
    @faces.each do |face|
        if face.class == Integer
            value = face
        elsif face == 'Ace'
            value = 11
        else 
            value = 10
        end
        @suits.each do |suit|
            @cards << Card.new(face, suit, value)
        end
    end

# Shuffle
    @cards.shuffle!
        def deal (num, player)
            num.times {@cards.shift.generate_card(player)}
        end
end

# Card Generate
def generate_card (player)
    new_card = Card.new face, suit, value
    player.hand << new_card
end