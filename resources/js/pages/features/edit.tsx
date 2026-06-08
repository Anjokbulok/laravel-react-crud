export default function FeatureEdit({ feature, categories }: { feature: { id: number; title: string; description: string; featured_image: string | null }; categories: Array<{ id: number; name: string }> }) {
    const preview = feature.featured_image ? `/storage/${feature.featured_image}` : null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
        const input = form.querySelector('input[name="_token"]') as HTMLInputElement | null;
        if (input) {
            input.value = token;
        }
        form.submit();
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Edit Feature</h1>
            <form method="POST" action={`/features/${feature.id}`} encType="multipart/form-data" className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="_token" defaultValue="" />
                <input type="hidden" name="_method" defaultValue="PUT" />
                <div className="grid gap-2">
                    <label className="text-sm font-medium">Title</label>
                    <input name="title" defaultValue={feature.title} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base" />
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea name="description" defaultValue={feature.description ?? ''} rows={4} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base" />
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-medium">Featured Image</label>
                    <input name="featured_image" type="file" accept="image/*" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base" />
                    {preview && <img src={preview} alt="Current" className="h-40 w-auto rounded border mt-2" />}
                </div>
                <div className="flex justify-end gap-2">
                    <a href={`/features/${feature.id}`} className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm">Cancel</a>
                    <button type="submit" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Update Feature</button>
                </div>
            </form>
        </div>
    );
}