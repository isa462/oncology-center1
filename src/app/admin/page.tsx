import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from './components/AdminHeader'
export default function AdminPage() {
  return <div>
    Добро пожаловать в админ-панель
    <AdminHeader/>
    <AdminSidebar />
  </div>;
}
