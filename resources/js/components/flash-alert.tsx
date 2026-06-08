import { useMemo } from 'react';
import { usePage } from '@inertiajs/react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export function FlashAlert() {
    const { flash } = usePage().props as { flash?: { success?: string; error?: string } };

    const message = useMemo(() => flash?.success || flash?.error, [flash]);

    if (!message) return null;

    return (
        <div className="fixed top-4 right-4 z-50 w-full max-w-sm">
            <Alert variant={flash?.error ? 'destructive' : 'default'} className="relative">
                <AlertTitle>{flash?.error ? 'Error' : 'Success'}</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
            </Alert>
        </div>
    );
}
