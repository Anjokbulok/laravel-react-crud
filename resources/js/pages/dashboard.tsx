import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface Category {
    id: number;
    name: string;
    description: string | null;
}

interface Feature {
    id: number;
    title: string;
    description: string;
    featured_image: string | null;
    category: Category;
}

export default function Dashboard({ features = { data: [] }, categories = [] }: { features?: { data: Feature[] }; categories?: Category[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Features</h1>
                    <Link
                        href="/features/create"
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground"
                    >
                        Add Feature
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {(features.data ?? []).map((feature) => (
                        <div key={feature.id} className="rounded-lg border bg-card overflow-hidden">
                            <div className="relative h-48 bg-muted">
                                <img
                                    src={
                                        feature.featured_image
                                            ? `/storage/${feature.featured_image}`
                                            : `https://placehold.co/600x400/e2e8f0/475569?text=${encodeURIComponent(feature.title)}`
                                    }
                                    alt={feature.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <span className="mb-2 inline-block text-xs font-medium text-muted-foreground">{feature.category.name}</span>
                                <h2 className="text-lg font-semibold">{feature.title}</h2>
                                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
