import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      nav={{ enabled: false }}
      themeSwitch={{ enabled: false }}
      sidebar={{
        collapsible: true,
        defaultOpenLevel: 1,
        footer: null,
      }}
    >
      {children}
    </DocsLayout>
  );
}
