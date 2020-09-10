class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts,  except: [:updated_at]
    end

    def show 
        post = Post.find_by(params[:id])
        render json: post,  except: [:updated_at]
    end

    def destroy
        post = Post.find_by(params[:id])
        post.destroy
    end

    
end
# sighting.to_json(:include => {
#     :bird => {:only => [:name, :species]},
#     :location => {:only => [:latitude, :longitude]}
#   }, :except => [:updated_at])