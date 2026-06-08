<?php

namespace Database\Seeders;

use App\Models\FeatureCategory;
use Illuminate\Database\Seeder;

class FeatureCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Networking', 'description' => 'Computer networking topics, protocols, and infrastructure.'],
            ['name' => 'Developer', 'description' => 'Software development, programming, and engineering.'],
            ['name' => 'Vybersecurity', 'description' => 'Cybersecurity, security practices, and threat protection.'],
            ['name' => 'IT Support', 'description' => 'Technical support and IT operations.'],
            ['name' => 'Cloud Computing', 'description' => 'Cloud services, platforms, and deployment.'],
            ['name' => 'Database', 'description' => 'Database management, SQL, and data architecture.'],
        ];

        foreach ($categories as $category) {
            FeatureCategory::updateOrCreate(
                ['name' => $category['name']],
                $category
            );
        }
    }
}
