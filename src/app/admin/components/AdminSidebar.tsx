"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./adminSidebar.scss";

export default function AdminSidebar() {
  const path = usePathname();

  const menu = [
    { name: "Участники", href: "/admin/participants" },
    { name: "Гала ужин", href: "/admin/gala" },
    { name: "Тезисы", href: "/admin/thesis" },
    { name: "Расписание", href: "/admin/schedule" },
  ];

  return (
    <aside className="sidebar">
      <h2>Админ-панель</h2>

      <ul>
        {menu.map((item) => (
          <li key={item.href} className={path.startsWith(item.href) ? "active" : ""}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
