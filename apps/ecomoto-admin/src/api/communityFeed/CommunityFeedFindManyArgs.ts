import { CommunityFeedWhereInput } from "./CommunityFeedWhereInput";
import { CommunityFeedOrderByInput } from "./CommunityFeedOrderByInput";

export type CommunityFeedFindManyArgs = {
  where?: CommunityFeedWhereInput;
  orderBy?: Array<CommunityFeedOrderByInput>;
  skip?: number;
  take?: number;
};
