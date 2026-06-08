import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Features', href: '/features' },
    { title: 'Create Feature', href: '/features/create' },
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
    category?: Category;
}

export default function FeatureCreate({ categories }: { categories: Category[] }) {
    const { data, setData, post, processing, errors } = useForm<{
        category_id: number | null;
        title: string;
        description: string;
        featured_image: File | null;
    }>({
        category_id: categories.length > 0 ? categories[0].id : null,
        title: '',
        description: '',
        featured_image: null,
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setData('featured_image', file);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        if (data.category_id !== null) {
            formData.append('category_id', data.category_id.toString());
        }
        formData.append('title', data.title);
        formData.append('description', data.description);
        if (data.featured_image) {
            formData.append('featured_image', data.featured_image);
        }

        post('/features', {
            data: formData as any,
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Feature" />
            <div className="p-6 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Create Feature</h1>

                <form onSubmit={submit} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                        />
                        {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="category_id">Category</Label>
                        <Select
                            value={data.category_id?.toString() ?? ''}
                            onValueChange={(value) => setData('category_id', Number(value))}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.id.toString()}>
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.category_id && <p className="text-sm text-destructive">{errors.category_id}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            rows={4}
                        />
                        {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="featured_image">Featured Image</Label>
                        <Input
                            id="featured_image"
                            name="featured_image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {errors.featured_image && <p className="text-sm text-destructive">{errors.featured_image}</p>}
                    </div>

                    <div className="flex justify-end gap-2">
                        <Button asChild variant="outline">
                            <a href="/features">Cancel</a>
                        </Button>
                        <Button type="submit" disabled={processing}>
                            Create Feature
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
