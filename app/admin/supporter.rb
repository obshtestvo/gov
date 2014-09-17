ActiveAdmin.register Supporter do
  permit_params :name, :organization, :is_organization,
                :area, :email, :email_confirmed, :approved
end
