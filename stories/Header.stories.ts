import type { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/Header";

const meta = {
  title: "Header",
  component: Header,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    isMobile: false,
  },
};
