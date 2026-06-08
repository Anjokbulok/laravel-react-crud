import { type BreadcrumbItem } from '@/types';
import { AppSidebarHeader } from '@/components/app-sidebar-header';

interface AppSidebarLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppSidebarLayout({ children, breadcrumbs = [] }: AppSidebarLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <AppSidebarHeader breadcrumbs={breadcrumbs} />
            <main className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl">{children}</main>
        </div>
    );
}
