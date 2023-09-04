import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  comments?: string | null;
  communityFeed?: CommunityFeedWhereUniqueInput | null;
  creator?: UserWhereUniqueInput | null;
};
