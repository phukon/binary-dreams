export default function Label({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }} className="flex border-2 border-black text-base rounded flex-col py-1 px-2 items-start gap-1 text-black font-bold custom-1 mt-2">
      {text}
      {children}
    </label>
  );
}
