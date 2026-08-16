import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from '@/components/Logo';

export const baseOptions: BaseLayoutProps = {
  themeSwitch: {
    enabled: false,
  },
  nav: {
    title: (
      <span className="flex items-center gap-2 font-bold text-base tracking-tight text-fd-foreground font-sans">
        <Logo className="w-5 h-5 text-[#fabd2f] dark:text-[#fabd2f] light:text-[#b57614] flex-shrink-0" />
        <span>Morrow</span>
        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-fd-muted text-fd-primary border border-fd-border">
          v0.1.0
        </span>
      </span>
    ),
  },
  links: [
    {
      text: 'Docs',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Themes',
      url: '/docs/themes',
    },
    {
      text: 'Commands',
      url: '/docs/commands',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/utkarsh125/morrow',
      external: true,
    },
  ],
};
