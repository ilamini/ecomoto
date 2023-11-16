import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedLikeCreateInput = {
  communityFeed?: CommunityFeedWhereUniqueInput | null;
  likedBy: UserWhereUniqueInput;
};
