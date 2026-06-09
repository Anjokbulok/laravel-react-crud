## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/laravel-react-crud.git
   cd laravel-react-crud
2.Install PHP dependencies
 composer install
3.Install JS dependencies
 npm install
4.Copy environment file and configure
 cp .env.example .env
 php artisan key:generate
5.Configure database in .env, then run migrations and seeders
 php artisan migrate --seed
6. Create the storage symlink
  php artisan storage:link
6. Build frontend assets
 npm run build
 7. Serve the application
php artisan serve
  
