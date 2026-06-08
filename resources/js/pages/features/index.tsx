import { Head, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Pencil, Trash2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Features', href: '/features' },
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

export default function FeaturesIndex({ features, categories }: { features: any; categories: Category[] }) {
    const items = Array.isArray(features?.data) ? features.data : [];

    const imageUrl = (f: Feature) => {
        if (f.featured_image && f.featured_image.trim() !== '') {
            return '/storage/' + f.featured_image;
        }
        return 'https://placehold.co/600x400/e2e8f0/475569?text=' + encodeURIComponent(f.title.substring(0, 20));
    };

    const handleDelete = (id: number) => {
        if (confirm('Delete this feature?')) {
            router.delete('/features/' + id);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Features" />
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Features</h1>
                    <Button asChild>
                        <a href="/features/create" className="inline-flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Add Feature
                        </a>
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((f: Feature) => (
                        <div key={f.id} className="rounded-lg border bg-card overflow-hidden">
                            <div className="relative h-48 bg-muted">
                                <img src={imageUrl(f)} alt={f.title} className="h-full w-full object-cover" />
                                <div className="absolute top-2 left-2 flex gap-2">
                                    <Button variant="secondary" size="icon" asChild>
                                        <a href={'/features/' + f.id + '/edit'}>
                                            <Pencil className="h-4 w-4" />
                                        </a>
                                    </Button>
                                    <Button variant="destructive" size="icon" onClick={() => handleDelete(f.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="p-4">
                                <Badge variant="outline" className="mb-2">
                                    {f.category.name}
                                </Badge>
                                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    {f.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {items.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                        No features found. Create your first feature to get started.
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
