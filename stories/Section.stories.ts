import type { Meta, StoryObj } from "@storybook/react";
import Section from "@/components/Section";

const meta = {
  title: "Section",
  component: Section,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSection: Story = {};
