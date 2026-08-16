import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import StickyProgress from '@/components/StickyProgress';
import CustomThemeSwitch from '@/components/CustomThemeSwitch';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <StickyProgress />
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions}
        sidebar={{
          collapsible: true,
          defaultOpenLevel: 1,
          footer: <CustomThemeSwitch />,
        }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
