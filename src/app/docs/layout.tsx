import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import ThemeToggle from '@/components/ThemeToggle';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        collapsible: true,
        defaultOpenLevel: 1,
        footer: <ThemeToggle />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
