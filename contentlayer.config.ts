import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; // eslint-disable-line
import rehypeSlug from "rehype-slug";
import { ImageOptions } from "./types/types";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const getImage = (target: string) => {
  return ImageOptions.find((options) => options.slug === `/read/${target}`)?.value;
};

const postComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/pics/${getImage(getSlug(doc))}`,
  },
  og: {
    type: "string",
    resolve: (doc) => `/read/${getSlug(doc)}/image.png`,
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    tags: { type: "json", required: false },
    featured: { type: "boolean", required: false },
    shortTitle: { type: "string", required: false, default: "" },
  },
  computedFields: postComputedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeSlug],
  },
});
