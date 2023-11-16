import { CommentLikeUpdateManyWithoutCommentsInput } from "./CommentLikeUpdateManyWithoutCommentsInput";
import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  commentLikes?: CommentLikeUpdateManyWithoutCommentsInput;
  comments?: string | null;
  communityFeed?: CommunityFeedWhereUniqueInput | null;
  creator?: UserWhereUniqueInput | null;
};
