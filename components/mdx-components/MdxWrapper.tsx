import { useMDXComponent } from "next-contentlayer/hooks";
import CustomImage from "./CustomImage";
import LinkPreview from "./LinkPreview";
import Alert from "./Alert";

const components = {
  Image: CustomImage,
  Alert: Alert,
  LinkPreview: LinkPreview,
};

export default function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}
