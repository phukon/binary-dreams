import Label from "@/components/select/Label";
import Select from "react-select";
import CustomOption from "@/components/select/CustomOption";
import { ImageOptions, draggableStyles } from "@/types/types";
import { useCanvas } from "@/context/CanvasContext";

type SettingsProps = {
  className?: string;
};

export default function Settings(props: SettingsProps = { className: " " }) {
  const {
    quote,
    style,
    progress,
    currentImage,
    neonGlowEnabled,
    selectedNeonGlowStyle,
    setQuote,
    setStyle,
    setProgress,
    setCurrentImage,
    setNeonGlowEnabled,
    setSelectedNeonGlowStyle,
  } = useCanvas();

  const handleNeonGlowToggle = () => {
    setNeonGlowEnabled(!neonGlowEnabled);
  };

  const handleNeonGlowStyleChange = (option: any) => {
    if (option) {
      setSelectedNeonGlowStyle(option.value);
    }
  };

  return (
    <div className={props.className}>
      <div className="grid grid-cols-2 gap-6 mb-5">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={neonGlowEnabled}
            onChange={handleNeonGlowToggle}
          />
          <span className="ml-2 text-xs font-semibold">Enable Neon Glow</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={progress}
            onChange={() => setProgress(!progress)}
          />
          <span className="ml-2 text-xs font-semibold">Add progess bar</span>
        </label>
        <div>
          <Label text="background">
            <Select
              defaultValue={{
                value: currentImage.value,
                label: currentImage.label,
                src: currentImage.src,
                head: currentImage.head,
                desc: currentImage.desc,
              }}
              onChange={(currentImage) =>
                currentImage && setCurrentImage(currentImage)
              }
              className="w-full rounded text-black text-xs"
              options={ImageOptions}
              isSearchable={false}
              components={{ Option: CustomOption }}
            />
          </Label>
        </div>
        <div>
          <Label text="style">
            <Select
              defaultValue={{
                value: style,
                label: style,
              }}
              onChange={(option) => option && setStyle(option.value)}
              className="w-full rounded text-black text-xs font-apple2mono"
              options={draggableStyles.map((style) => {
                return {
                  value: style,
                  label: style,
                };
              })}
              isSearchable={false}
            />
          </Label>
        </div>
      </div>
      <Label text="Text">
        <input
          type="text"
          placeholder="e/acc"
          defaultValue={quote}
          onChange={(event) => setQuote(event.target.value)}
          className="w-full p-2 rounded text-black text-xs font-apple2mono"
        />
      </Label>
      <div className="mt-4">
        {neonGlowEnabled && (
          <div className="mt-2">
            <Label text="Neon Glow Style">
              <Select
                defaultValue={{
                  value: selectedNeonGlowStyle,
                  label: selectedNeonGlowStyle,
                }}
                onChange={handleNeonGlowStyleChange}
                className="w-full rounded text-black text-xs font-apple2mono"
                options={[
                  { value: "white", label: "white" },
                  { value: "red", label: "Red" },
                  { value: "green", label: "Green" },
                  { value: "yellow", label: "Yellow" },
                ]}
                isSearchable={false}
              />
            </Label>
          </div>
        )}
      </div>
    </div>
  );
}
