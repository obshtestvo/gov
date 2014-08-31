# Отворен софтуер и гъвкава разработка в държавата

Кампанията има за цел да адрасира различни групи (IT сферата, държавната
администрация и гражданския сектор) за да разясни по човешки начин ползите от
прозрачния и гъвкас процес на разработката на софтуер за нуждите на държавата.

Сайтът на кампанията е с отворен код и се задвижва от Ruby on Rails.

## Инсталация

Трябва да имате Ruby 2.x и [Bundler](http://bundler.io/).

1. Клонирайте си хранилището и влезте в папката.
2. Изпълнете `bundle install`.
3. Създайте си `config/database.yml` файл. Може да използвате примерния в
   `config/database.yml.example`.
4. Създайте `config/secrets.yml` файл. Може да използвате примерния в
   `config/secrets.yml.example`.
5. Изпълнете `bundle exec rake db:setup`.
6. Стартирайте приложението с `bin/rails server`.

Трябва да имате работещо копие на [localhost:3000](http://localhost:3000/).

## Deployment

Инсталацията на приложението в продукционен режим може да се извърши по
много начини. Нашият избор е Capistrano за deployment, PostgreSQL база и Puma в
съчетание с Nginx за application server. Puma процесите се управляват от
[Jungle](https://github.com/puma/puma/tree/master/tools/jungle). Първоначалната
инсталация се прави с помощта на
[Capistrano::Puma](https://github.com/seuros/capistrano-puma).

Освен работеща PostgreSQL база, ще имате нужда и от header-файловете й, за да
може да се инсталира `pg` Ruby библиотеката. На Debian-базирани системи може
да инсталирате `libpq-dev` пакета.

Уверете се, че в environment променливите на потребителя, под чието име пускате
приложението, има `RAILS_ENV=production`.

1. Изпълнете локално `bundle exec cap production deploy:check`. Задачата ще
   създаде необходимите пътища и ще се оплаче, ако липсват необходимите
   конфигурационни файлове. Направете необходимите корекции и се ъверете, че
   минава успешно.
2. В `shared/gov_production_nginx.conf` ще е създаден конфигурационен файл за
   Nginx. Може да го активирате като направите symlink към него от
   `/etc/nginx/sites-enabled`.
3. Инсталирайте Puma Jungle. Ако имате `sudo` права, може да използвате
   следната команда: `bundle exec cap production puma:jungle:install`. Бихте
   могли временно да разрешите на потребител `www-data` да изпълнява sudo
   команди като добавите следното в `/etc/sudoers`:

        www-data    ALL=(ALL:ALL) NOPASSWD: ALL

   В противен случай, трябва да изпълните ръчно стъпките по инсталация, описани
   [в тази задача](https://github.com/seuros/capistrano-puma/blob/master/lib/capistrano/tasks/jungle.cap).
4. Трябва да може да се осъществи връзка с базата данни, конфигурирана в
   `shared/config/database.yml`.
5. Качете приложението с `bundle exec cap production deploy`.
6. На сървъра изпълнете `service nginx reload`.

## Искам да редактирам и допълвам съдържанието

Чудесно! Ако нямате познания по html, редактирайте единствено
[нашия хакпад](https://obshtestvo.hackpad.com/-Open-Source-IsxSdi0kaBo). А ако
знаете как и имате желание и време - можете да редактирате и кодът (Само имайте
на ум, че различни части от сайтът се повтарят - например секцията „митове“ е
една и съща при страницата за IT, Държавна администрация и граждански сектор).

Благодарим!

## Лиценз

Този код се разпространява под MIT лиценз.
