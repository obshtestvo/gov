server  ENV['GOV_PRODUCTION_SERVER'] || 'koi.obshtestvo.bg:2206',
        user: 'www-data',
        roles: %w(app web db)

set :deploy_to,       '/var/www/gov.obshtestvo.bg'
set :puma_threads,    [15, 15]
set :puma_workers,    4
