class User < ActiveRecord::Base
  has_secure_password
  validates_uniqueness_of :email
  validates_presence_of :email
  
  has_many :user_tickets
  has_many :tickets, through: :user_tickets
  has_many :user_projects
  has_many :projects, through: :user_projects
  has_many :comments, foreign_key: :users_id, dependent: :destroy


  def self.authenticate_with_credentials(email, password)
    @user = User.find_by email: email
    if @user && @user.authenticate(password)
      @user
    else
      nil
    end
  end

  def self.from_omniauth(auth)
    # Creates a new user only if it doesn't exist
    where(email: auth.info.email).first_or_initialize do |user|
      user.uid = auth.uid
      user.name = auth.info.name
      user.email = auth.info.email
      user.image_url = auth.info.image
    end
  end

 
end
