import { Button } from "@/components/ui/button";


export default function Canvas() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b dark:bg-gray-800">
        <h1 className="text-xl font-semibold">Editor</h1>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="outline">
            Save
          </Button>
        </div>
      </header>
      <main className="flex flex-col md:flex-row flex-1">
        <aside className="flex flex-col gap-4 p-4 border-r w-full md:w-60">
          <h2 className="text-lg font-semibold">Tools</h2>
          <div className="flex flex-col gap-2">
            <Button className="justify-start" size="sm" variant="ghost">
              <PencilIcon className="h-4 w-4 mr-2" />
              Draw
            </Button>
            <Button className="justify-start" size="sm" variant="ghost">
              <TextIcon className="h-4 w-4 mr-2" />
              Text
            </Button>
            <Button className="justify-start" size="sm" variant="ghost">
              <FilterIcon className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="justify-start" size="sm" variant="ghost">
              <CropIcon className="h-4 w-4 mr-2" />
              Crop
            </Button>
            <Button className="justify-start" size="sm" variant="ghost">
              <RotateCwIcon className="h-4 w-4 mr-2" />
              Rotate
            </Button>
            <Button className="justify-start" size="sm" variant="ghost">
              <FlipVerticalIcon className="h-4 w-4 mr-2" />
              Flip
            </Button>
          </div>
          <h2 className="text-lg font-semibold">Settings</h2>
          <div className="flex flex-col gap-2">
            {/* <Label htmlFor="brush-size">Brush Size</Label>
            <Input id="brush-size" max="100" min="1" type="range" />
            <Label htmlFor="color">Color</Label>
            <Input id="color" type="color" />
            <Label htmlFor="opacity">Opacity</Label>
            <Input id="opacity" max="1" min="0" step="0.1" type="range" /> */}
          </div>
        </aside>
        <div className="flex-1 p-4">
          <div className="h-full w-full border rounded-md">
            <img
              alt="Canvas"
              className="h-full w-full object-cover rounded-md"
              src="/pics/rocket.jpg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function CropIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
      <path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </svg>
  );
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function FlipVerticalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
      <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </svg>
  );
}

function PencilIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function RotateCwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}

function TextIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}
