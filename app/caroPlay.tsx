import ImageSlider from "@/components/ImageSlider";

const CaroPlay = () => {
  const containerStyles = {
    width: "auto",
    height: "auto",
    margin: "0 auto",
  };
  return (
    <div style={containerStyles}>
      <ImageSlider />
    </div>
  );
};

export default CaroPlay;
