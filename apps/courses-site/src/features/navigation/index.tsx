import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@ui-kit/ui';

const navItems = [
  { title: 'home', href: '/' },
  { title: 'about', href: '/about' },
  { title: 'contact', href: '/contact' },
];

export const Navigation = () => (
  <NavigationMenu>
    <NavigationMenuList>
      {navItems.map(({ title, href }) => (
        <NavigationMenuItem key={title}>
          <Link href={href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
