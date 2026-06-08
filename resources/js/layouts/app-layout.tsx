import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { FlashAlert } from '@/components/flash-alert';
import { type BreadcrumbItem } from '@/types';

interface AppLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        <FlashAlert />
        {children}
    </AppLayoutTemplate>
);
