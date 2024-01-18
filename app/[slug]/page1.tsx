// "use client";
// import Draggable from "react-draggable";
// import { useRef } from "react";
// import { createFileName, useScreenshot } from "use-react-screenshot";

// const Post = () => {
//   const [image, takeScreenshot] = useScreenshot({
//     quality: 1.0,
//   });

//   console.log(image)

//   const refSS = useRef(null);

//   const download = (
//     image: string,
//     { name = "riki", extension = "png" } = {}
//   ) => {
//     const a = document.createElement("a");
//     a.href = image;
//     a.download = createFileName(extension, name);
//     a.click();
//   };

//   const downloadSS = () => {
//     takeScreenshot(refSS.current).then(download);
//   };

//   return (
//     <div ref={refSS}>
//       <button onClick={downloadSS}>take ss</button>
//       <h1>neeeeh</h1>{" "}
//       <div className="h-[1200px] w-[1200px] flex bg-slate-800">
//         {" "}
//         <Draggable bounds="parent">
//           <h1 className="hover:cursor-move">helllo</h1>
//         </Draggable>
//       </div>
//     </div>
//   );
// };

// export default Post;
