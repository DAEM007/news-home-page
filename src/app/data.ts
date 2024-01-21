

// interface menu props
interface MenuItemsProps {
    href: string;
    label: string;
}
  
export const menuItems: MenuItemsProps[] = [
    { href: "/", label: "Home" },
    { href: "/new", label: "New" },
    { href: "/popular", label: "Popular" },
    { href: "/trending", label: "Trending" },
    { href: "/categories", label: "Categories" },
];

// navItems Props
export interface NavItemProps {
    href: string;
    label: string;
    active?: boolean;
}

// modal open prop
export interface ModalOpen {
    navActive: boolean;
    toggleNav: () => void;
}