// app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-dvh overflow-hidden bg-slate-50">
      <SideRail />                                  {/* ไม่ re-render */}
      <main className="flex-1 min-w-0 overflow-y-auto">{children}</main>
      <CartPanel />                                 {/* global store */}
    </div>
  );
}
