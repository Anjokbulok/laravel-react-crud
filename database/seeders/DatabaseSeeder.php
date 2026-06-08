<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('feature_categories')->insertOrIgnore([
            ['name' => 'Networking', 'description' => 'Computer networking topics, protocols, and infrastructure.', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Developer', 'description' => 'Software development, programming, and engineering.', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Vybersecurity', 'description' => 'Cybersecurity, security practices, and threat protection.', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'IT Support', 'description' => 'Technical support and IT operations.', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Cloud Computing', 'description' => 'Cloud services, platforms, and deployment.', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Database', 'description' => 'Database management, SQL, and data architecture.', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
