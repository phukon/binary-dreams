import Link from "next/link";

const NotFound = () => {
  const art = `
      /    /    
  ╭━_━╮   ╭━_━╮
  ┃ | ┃   ┃ | ┃
  ┃   ┃   ┃   ┃
  ╰━━━╯   ╰━━━╯
        -      `;
  return (
    <div className="min-h-screen relative bg-white flex flex-col items-center justify-center dotted-div">
      <pre>{art}</pre>
      <div className="text-black text-center">
        <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg mb-8 custom-1">
          The page you are looking for might be in another dimension.
        </p>
        <Link href="/">
          <div className="text-blue-500 hover:underline">Go back home</div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
