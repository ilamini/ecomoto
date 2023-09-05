import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  comments?: string | null;
  communityFeed?: CommunityFeedWhereUniqueInput | null;
  creator?: UserWhereUniqueInput | null;
};
