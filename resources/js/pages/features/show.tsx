import { useMemo } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Features', href: '/features' },
    { title: 'Feature Details', href: '#' },
];

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
}

interface Feature {
    id: number;
    title: string;
    description: string;
    featured_image: string | null;
    is_published: boolean;
    category: Category;
}

export default function FeatureShow({ feature }: { feature: Feature }) {
    const { auth } = usePage().props;

    const heroBg = useMemo(() => {
        if (feature.featured_image && feature.featured_image.trim() !== '') {
            return `/storage/${feature.featured_image}`;
        }
        return 'https://placehold.co/1200x500/e2e8f0/475569?text=' + encodeURIComponent(feature.title);
    }, [feature.featured_image, feature.title]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={feature.title} />

            <div className="relative h-72 md:h-96 w-full overflow-hidden">
                <img
                    src={heroBg}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex h-full items-end p-6">
                    <div className="max-w-2xl text-white">
                        <Badge className="mb-2" variant="secondary">{feature.category?.name}</Badge>
                        <h1 className="text-3xl font-bold md:text-4xl">{feature.title}</h1>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8 max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/features" className="hover:text-foreground">Features</Link>
                        <span>/</span>
                        <span className="text-foreground">{feature.title}</span>
                    </nav>
                    <Button asChild size="sm">
                        <Link href={`/features/${feature.id}/edit`}>Edit Feature</Link>
                    </Button>
                </div>

                <article className="prose dark:prose-invert max-w-none">
                    <p className="whitespace-pre-line">{feature.description}</p>
                </article>
            </div>
        </AppLayout>
    );
}
