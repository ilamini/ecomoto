import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedLikeWhereInput = {
  communityFeed?: CommunityFeedWhereUniqueInput;
  id?: StringFilter;
  likedBy?: UserWhereUniqueInput;
};
