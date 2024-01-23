import Header from "@/components/Header";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>      <Header isTitle={true} />
      <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
        {" "}
        {children}
      </div>
    </div>
  );
}
