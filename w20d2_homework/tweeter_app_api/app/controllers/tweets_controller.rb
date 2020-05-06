class TweetsController < ApplicationController
    
    def index
        render json: { status: 200, tweets: Tweet.all }
    end

    def show
        found_tweet = Tweet.find(params[:id])
        render json: { status: 200, tweet: found_tweet, replies: found_tweet.replies }
    end

    def create
        tweet = Tweet.new(tweet_params)
        
        if tweet.save
            render(json: {tweet: tweet}, status: 201)
        else
            render(json: {tweet: tweet}, status: 422)
        end
    end

    def update
        tweet = Tweet.find(params[:id])
        tweet.update(tweet_params)
        render(json: { tweet: tweet})
    end

    def destroy
        tweet = Tweet.destroy(params[:id])
        render(status: 204)
    end
    
    private

    def tweet_params
        params.require(:tweet).permit(:title, :content, :author)
    end
end