ActiveAdmin.register Supporter do
  permit_params :first_name, :last_name, :organization, :is_organization,
                :area, :email, :email_confirmed, :approved
end
