export default function Label({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex border-2 bg-white border-black text-base rounded flex-col py-1 px-2 items-start gap-1 text-black font-bold custom-1 mt-2">
      {text}
      {children}
    </label>
  );
}
