import MyLogo from "@/components/(brand)/MyLogo";

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
      <div className="pb-52">{children}</div>
    </div>
  );
}
