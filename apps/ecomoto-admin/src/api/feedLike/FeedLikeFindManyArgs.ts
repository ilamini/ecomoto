import { FeedLikeWhereInput } from "./FeedLikeWhereInput";
import { FeedLikeOrderByInput } from "./FeedLikeOrderByInput";

export type FeedLikeFindManyArgs = {
  where?: FeedLikeWhereInput;
  orderBy?: Array<FeedLikeOrderByInput>;
  skip?: number;
  take?: number;
};
