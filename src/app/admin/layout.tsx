import AdminSidebar from "./components/AdminSidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminHeader from "./components/AdminHeader";
// import AdminLayout from "@/layout/AdminLayout";

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies(); // ждём Promise
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/login");
  }

  return (
    <section style={{ padding: "20px" }}>
      <AdminHeader />
      <h2>Админ-панель</h2>
      
      <AdminSidebar />
      <main className="admin-content">{children}</main>
      {children}
    </section>
  );
}
