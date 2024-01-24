import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { allAbouts, About as AboutType } from ".contentlayer/generated";

import MdxWrapper from "@/components/mdx-components/MdxWrapper";
import Image from "next/image";

type AboutProps = {
  about: AboutType;
  related: AboutType[];
};

type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (!allAbouts) {
    throw new Error("Not found");
  }

  const {
    title,
    summary: description,
    // image,
    // slug,
  } = allAbouts[0];

  const metadata: Metadata = {
    title: `${title} | Riki Phukon`,
    description,
    openGraph: {
      title: `${title} | Riki Phukon`,
      description,
      type: "article",
      url: `https://rikiphukon.com/blog/${title}`,
      images: [
        {
          url: `https://rikiphukon.com/api/og?title=${title}`,
          alt: title,
        },
      ],
    },
  };

  return metadata;
}

export default async function About({ params }: { params: any }) {
  if (!allAbouts) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <div className="max-w-xl space-y-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
            {allAbouts[0].title}
          </h1>
          <p className="text-lg leading-tight text-primary md:text-xl">
            {allAbouts[0].summary}
          </p>
          {allAbouts[0].image && (
        <>
          <div className="h-8" />
          <Image
            src={allAbouts[0].image}
            alt={`${allAbouts[0].title} post image`}
            width={700}
            height={350}
            className="-ml-6 w-[calc(100%+48px)] max-w-none animate-in md:rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)]"
            style={{ "--index": 2 } as React.CSSProperties}
            priority
            quality={100}
          />
        </>
      )}
        </div>
        
      </div>

      <div className="h-16" />
      <article>
        <div
          className="prose prose-neutral --local-inter animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <MdxWrapper code={allAbouts[0].body.code} />
        </div>
      </article>
    </div>
  );
}
