"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./navlink.module.css";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const currentUrlSegment = useSelectedLayoutSegment();
  const isActive = `/${currentUrlSegment}` === href;
  return (
    <Link
      href={href}
      className={isActive ? `${styles.link} ${styles.active}` : styles.link}
    >
      {children}
    </Link>
  );
}
