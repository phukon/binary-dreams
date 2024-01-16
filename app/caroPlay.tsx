import ImageSlider from "@/components/ImageSlider";
import satDish from "/public/pics/satDish.jpg";
import mecha from "/public/pics/mecha.jpg";

const caroPlay = () => {
  const slides = [
    { url: satDish, title: "beach 1" },
    { url: mecha, title: "beach 1" },
    { url: satDish, title: "beach 1" },
    { url: mecha, title: "beach 1" },
  ];

  const containerStyles = {
    width: "525px",
    height: "500px",
    margin: "0 auto",
  };
  return (
    <div style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  );
};

export default caroPlay;
