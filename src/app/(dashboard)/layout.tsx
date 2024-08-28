import Link from "next/link";
import Menu from '@/components/Menu';
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <div className="h-[100%] flex">
  <div className="w-[15%] md:w-[8%] lg:[30%] xl:w-[15%] bg-red-50 p-4 top-0">
    <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2">  FE Logo
    {/* <span className="hidden xl:block">CodeWall School</span> */}
    </Link>

    <Menu />
  </div>

  <div className="w-[85%] md:w-[92%] lg:[70%] xl:w-[85%] bg-[#f7f8fa] ">
<Navbar />
  {children}
  </div>
 </div>
  );
}
