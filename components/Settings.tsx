"use client";
import TimezoneSelect from "react-timezone-select";
import Label from "@/components/select/Label";
import Select from "react-select";
import CustomOption from "@/components/select/CustomOption";
import { ImageOptions, draggableStyles } from "@/types/imgBuffer";
import { useCanvas } from "@/context/CanvasContext";
import { useState } from "react";

export default function Settings() {
  const {
    date,
    description,
    timezone,
    style,
    currentImage,
    setDate,
    setTimezone,
    setDescription,
    setStyle,
    setCurrentImage,
  } = useCanvas();

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDateValue = event.target.value;
    if (!event.target.value) return;
    setDate((currentDate: Date) => {
      const newDate = new Date(currentDate);
      const [year, month, day] = newDateValue.split("-").map(Number);
      newDate.setFullYear(year, month - 1, day);
      return newDate ? newDate : currentDate;
    });
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTimeValue = event.target.value;
    if (!event.target.value) return;
    setDate((currentDate: Date) => {
      const newTime = new Date(currentDate);
      const [hours, minutes] = newTimeValue.split(":").map(Number);
      newTime.setHours(hours, minutes);
      return newTime ? newTime : currentDate;
    });
  };

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Label text="date">
        <input
          type="date"
          defaultValue={date.toISOString().split("T")[0]}
          onChange={handleDateChange}
          className="w-full p-2 rounded text-black text-xs font-apple2mono"
        />
      </Label>
      <Label text="time">
        <input
          type="time"
          defaultValue={date.toISOString().split("T")[1].substring(0, 5)}
          onChange={handleTimeChange}
          className="w-full p-2 rounded text-black text-xs font-apple2mono"
        />
      </Label>
      <Label text="description">
        <input
          type="text"
          placeholder={(new Date().getFullYear() + 1).toString()}
          defaultValue={description}
          onChange={(event) => setDescription(event.target.value)}
          className="w-full p-2 rounded text-black text-xs font-apple2mono"
        />
      </Label>
      <Label text="timezone">
        <TimezoneSelect
          className="text-black text-xs w-full"
          value={timezone}
          onChange={(timezone) => setTimezone(timezone.value)}
          isSearchable={true}
        />
      </Label>
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
          className="w-full rounded text-black text-xs font-apple2mono"
          options={ImageOptions}
          isSearchable={false}
          components={{ Option: CustomOption }}
        />
      </Label>
    </>
  );
}
