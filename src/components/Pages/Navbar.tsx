'use client';

import { Mail, Github, Linkedin, HomeIcon } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { ThemeToggle } from '@/components/theme-toggle';

const data = [
  {
    title: 'Home',
    icon: <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#',
  },
  {
    title: 'GitHub',
    icon: <Github className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: 'https://github.com/Sabique-Islam',
    external: true,
  },
  {
    title: 'LinkedIn',
    icon: <Linkedin className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: 'https://www.linkedin.com/in/sabique-islam/',
    external: true,
  },
  {
    title: 'Email',
    icon: <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: 'mailto:sabiqueislam7@gmail.com',
  },
];

export function Navbar() {
  return (
    <div className='fixed bottom-4 left-1/2 max-w-full -translate-x-1/2 z-50'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className='block h-full w-full'
                aria-label={item.title}
              >
                {item.icon}
              </a>
            </DockIcon>
          </DockItem>
        ))}

        {/* Theme toggle */}
        <DockItem className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'>
          <DockLabel>Theme</DockLabel>
          <DockIcon>
            <ThemeToggle />
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
}