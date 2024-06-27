"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string; // Use a custom active class name
  exact?: boolean; // Control exact URL matching
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  activeClassName = "active", // Provide a default active class name
  exact = false, // Default to non-exact matching
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Determine active state based on exact match or prefix match
  const isActive =
    href === "/"
      ? pathname === href
      : pathname.startsWith(href) && href !== "/";

  // Handle custom active className and apply conditionally
  const combinedClassName = `${className ? className + " " : ""}${
    isActive ? activeClassName : ""
  }`;

  // Implement onClick handler for accessibility and styling consistency
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Accessibility logic (optional)
    // ... (your screen reader announcement implementation)

    if (!href.startsWith("#")) {
      if (event.button === 1) {
        // Check for middle click
        window.open(href, "_blank", "noopener,noreferrer"); // Open in new tab
      } else {
        router.push(href); // Normal push for left click
      }
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={combinedClassName}
      // Add aria-current attribute for accessibility (optional)
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
