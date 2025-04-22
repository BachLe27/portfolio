import { Navbar } from "@/components";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100vh]">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
