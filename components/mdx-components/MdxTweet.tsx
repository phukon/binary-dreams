import { Suspense } from "react";
import { unstable_cache } from "next/cache";
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ["tweet"],
  { revalidate: 3600 * 24 }
);

const TweetPage = async ({ id }: { id: string }) => {
  try {
    const tweet = await getTweet(id);
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
  } catch (error) {
    console.error(error);
    return <TweetNotFound error={error} />;
  }
};

const MdxTweet = ({ id, theme }: { id: string, theme: "dark" | "light" }) => (
  <div data-theme={theme}>
    <Suspense fallback={<TweetSkeleton />}>
      <TweetPage id={id} />
    </Suspense>
  </div>
);

export default MdxTweet;
