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
backend:
	docker compose exec backend bash
serve:
	docker compose exec backend php artisan serve --host=0.0.0.0 --port=8000
frontend:
	docker compose exec frontend sh
autoload:
	docker compose exec backend composer dump-autoload
migrate:
	docker compose exec backend php artisan migrate
fresh:
	docker compose exec backend php artisan migrate:fresh --seed
dev:
	docker compose exec frontend npm run dev
envupdate:
	docker compose exec backend cp .env.example .env