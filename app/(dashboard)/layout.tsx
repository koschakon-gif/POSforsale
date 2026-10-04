// app/(dashboard)/layout.tsx
import SideRail from "@/components/sell/SideRail";
import CartPanel from "@/components/sell/CartPanel";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh overflow-hidden bg-slate-50">
      <SideRail />
      <main className="flex-1 min-w-0 overflow-y-auto">{children}</main>
      <CartPanel />
    </div>
  );
}
