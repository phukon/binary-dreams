// "use client";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// import { useSlide } from "@/context/SlideContext";
// import { Button } from "@/components/ui/button";
// import {
//   CardTitle,
//   CardDescription,
//   CardHeader,
//   CardContent,
//   CardFooter,
//   Card,
// } from "@/components/ui/card";
// import Link from "next/link";

// export default function Post() {
//   const path = usePathname();
//   const { ImageData } = useSlide();
//   const currentIndex = ImageData.findIndex((o) => o.slug === path) || 0;

//   return (
//     <div className="grid lg:grid-cols-2 gap-6 p-4 md:p-6">
//       <div className="relative group overflow-hidden rounded-lg">
//         <Image
//           alt="Wallpaper 1"
//           className="object-cover w-full h-60 md:h-96"
//           height="600"
//           src={ImageData[currentIndex].src}
//           style={{
//             aspectRatio: "800/600",
//             objectFit: "cover",
//           }}
//           width="800"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity">
//           <div className="p-4 md:p-6">
//             <h3 className="font-semibold text-lg md:text-xl text-white">
//               {ImageData[currentIndex].head}
//             </h3>
//             <Link
//               href={`/editor?bg=${ImageData[currentIndex].value}`}
//             >
//               <Button
//                 className="mt-4"
//                 variant="brutal"
//                 size="default"
//                 style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }}
//               >
//                 Edit
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <Card className="bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80">
//         <CardHeader className="flex flex-row items-center gap-4">

//           <div className="grid gap-1">
//             <CardTitle>@username</CardTitle>
//             <CardDescription>2h ago</CardDescription>
//           </div>
//         </CardHeader>
//         <CardContent className="text-sm">
//           {ImageData[currentIndex].desc}
//         </CardContent>
//         <CardFooter className="flex items-center gap-4">
//           <Button size="icon" variant="ghost">
//             <HeartIcon className="w-4 h-4" />
//             <span className="sr-only">Like</span>
//           </Button>
//           <Button size="icon" variant="ghost">
//             <MessageCircleIcon className="w-4 h-4" />
//             <span className="sr-only">Comment</span>
//           </Button>
//           <Button size="icon" variant="ghost">
//             <SendIcon className="w-4 h-4" />
//             <span className="sr-only">Share</span>
//           </Button>
//           <Button className="ml-auto" size="icon" variant="ghost">
//             <BookmarkIcon className="w-4 h-4" />
//             <span className="sr-only">Save</span>
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

// function BookmarkIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//     </svg>
//   );
// }

// function HeartIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
//     </svg>
//   );
// }

// function MessageCircleIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
//     </svg>
//   );
// }

// function SendIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m22 2-7 20-4-9-9-4Z" />
//       <path d="M22 2 11 13" />
//     </svg>
//   );
// }
