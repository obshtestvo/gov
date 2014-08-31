ActiveAdmin.register Supporter do
  permit_params :first_name, :last_name, :organization, :supporter_kind,
                :sphere, :email, :email_confirmed, :approved
end
