# Container Start
up:
	docker compose up -d
down:
	docker compose down --remove-orphans
restart:
	@make down
	@make up
ps:
	docker compose ps
stop:
	docker compose stop
build:
	docker compose build --no-cache
startsystem:
	@make phpartisan
	@make dev
# Container
php:
	docker compose exec php bash
serve:
	docker compose exec php php artisan serve --host=0.0.0.0 --port=8000
frontend:
	docker compose exec frontend sh
# autoload
autoload:
	docker compose exec php composer dump-autoload
# DB
migrate:
	docker compose exec php php artisan migrate
fresh:
	docker compose exec php php artisan migrate:fresh --seed
dev:
	docker compose exec frontend npm run dev

# Create Laravel Project (first execution)
composer:
	docker compose exec php composer install
envupdate:
	docker compose exec php cp .env.example .env
	@keygenerate
keygenerate:
	docker compose exec php php artisan key:generate
laravel-install:
	docker compose exec php composer create-project "laravel/laravel=11.*" .
react-install:
	cd src
	npm install
	npm install react react-dom
