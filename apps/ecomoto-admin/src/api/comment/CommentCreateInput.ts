import { CommentLikeCreateNestedManyWithoutCommentsInput } from "./CommentLikeCreateNestedManyWithoutCommentsInput";
import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  commentLikes?: CommentLikeCreateNestedManyWithoutCommentsInput;
  comments?: string | null;
  communityFeed?: CommunityFeedWhereUniqueInput | null;
  creator?: UserWhereUniqueInput | null;
};
