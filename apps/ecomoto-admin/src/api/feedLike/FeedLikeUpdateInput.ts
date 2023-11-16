import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedLikeUpdateInput = {
  communityFeed?: CommunityFeedWhereUniqueInput | null;
  likedBy?: UserWhereUniqueInput;
};
