https://zenn.dev/eguchi244_dev/articles/laravel-react-docker-introduction-20230831
https://reffect.co.jp/laravel/laravel9_vite_react
https://github.com/longbridgeyuk/react-lazy-sample/blob/main/src/main.tsx

# PermissionDenied Error handle
    make php
    chown www-data ./ -R

# copy .env.example → .env 
    make php
    cp .env.example .env
    @key generate

# key generate
    php artisan key:generate

# autoload setting
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "App\\Models\\": "app/Models/", //new
            ////
        }
    }
# vite.config.js setting
    export default defineConfig({
        plugins: [
            react(), //new
            laravel({
                ////
            }),
        ],
    });

82.206.167.181
