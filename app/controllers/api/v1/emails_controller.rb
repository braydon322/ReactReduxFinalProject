module Api
  module V1
    class EmailsController < ApplicationController
      def index
        render json: Email.all
      end

      def create
        @email = Email.create(email_params)
        @email.counter = 0;

        if @email.save
          render json: @email, status: 201
        else
          render json: {errors: @email.errors.full_messages}, status: 422
        end
      end

      def update
        @email = Email.find(params[:id])
        @email.counter = @email.counter + 1
        @email.save
      end

      def destroy
      end

      private

      def set_email
        @email = Email.find(params[:id])
      end

      def email_params
        params.permit(:email, :counter)
      end

    end
  end
end
