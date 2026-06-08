<?php
require 'C:/xampp/htdocs/laravel-react/laravel-react-crud/vendor/autoload.php';
$app = require 'C:/xampp/htdocs/laravel-react/laravel-react-crud/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

foreach (Illuminate\Support\Facades\DB::table('feature_categories')->get(['id','name','description']) as $c) {
    echo $c->id.': '.$c->name."\n";
}
