import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  themeSwitch: {
    enabled: false,
  },
  nav: {
    title: (
      <span className="font-bold text-base tracking-tight text-[#fbf1c7] font-sans">
        Morrow
        <span className="ml-2 text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#282828] text-[#fabd2f] border border-[#3c3836]">
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
