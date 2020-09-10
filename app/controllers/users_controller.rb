class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, except: [:created_at, :updated_at]
    end

    def show 
        user = User.find_by(params[:id])
        render json: user, except: [:created_at, :updated_at]
    end


    def update
        user = User.find_by(params[:id])
        user.update(login: params[:user][:login])#, name: params[:user][:name], email:[:user][:email] )
        render json: user, except: [:created_at, :updated_at]
    end
end
