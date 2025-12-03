import Link from "next/link";

export default function AdminHeader() {
  return (
    <header
      style={{
        width: "100%",
        padding: "14px 20px",
        background: "#1a1a1a",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "600" }}>
        <h1>Admin Panel</h1>
      </div>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/admin" style={{ color: "white" }}>
          Dashboard
        </Link>

        <Link href="/admin/schedule" style={{ color: "white" }}>
          Schedule
        </Link>

        <Link href="/admin/thesis" style={{ color: "white" }}>
          Thesis
        </Link>
      </nav>
    </header>
  );
}
