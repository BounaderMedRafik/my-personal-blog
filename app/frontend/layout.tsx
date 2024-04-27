import MyLogo from "@/components/(brand)/MyLogo";
import ScrollToTop from "@/components/(providers)/ScrollToTop";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <MyLogo />
      </div>
      <div className="pb-52">
        {children} <ScrollToTop />
      </div>
    </div>
  );
}
