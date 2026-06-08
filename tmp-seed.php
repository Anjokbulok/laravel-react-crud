<?php
require 'C:/xampp/htdocs/laravel-react/laravel-react-crud/vendor/autoload.php';
$app = require 'C:/xampp/htdocs/laravel-react/laravel-react-crud/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$now = date('Y-m-d H:i:s');
$rows = [
    ['name' => 'Networking', 'description' => 'Computer networking topics, protocols, and infrastructure.', 'created_at' => $now, 'updated_at' => $now],
    ['name' => 'Developer', 'description' => 'Software development, programming, and engineering.', 'created_at' => $now, 'updated_at' => $now],
    ['name' => 'Vybersecurity', 'description' => 'Cybersecurity, security practices, and threat protection.', 'created_at' => $now, 'updated_at' => $now],
    ['name' => 'IT Support', 'description' => 'Technical support and IT operations.', 'created_at' => $now, 'updated_at' => $now],
    ['name' => 'Cloud Computing', 'description' => 'Cloud services, platforms, and deployment.', 'created_at' => $now, 'updated_at' => $now],
    ['name' => 'Database', 'description' => 'Database management, SQL, and data architecture.', 'created_at' => $now, 'updated_at' => $now],
];

foreach ($rows as $row) {
    Illuminate\Support\Facades\DB::table('feature_categories')->updateOrInsert(['name' => $row['name']], $row);
}

echo "Seeded categories.\n";
