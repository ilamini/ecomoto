import { CommentLikeCreateNestedManyWithoutCommentsInput } from "./CommentLikeCreateNestedManyWithoutCommentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserFeedWhereUniqueInput } from "../userFeed/UserFeedWhereUniqueInput";

export type CommentCreateInput = {
  commentLikes?: CommentLikeCreateNestedManyWithoutCommentsInput;
  comments?: string | null;
  creator?: UserWhereUniqueInput | null;
  userFeed?: UserFeedWhereUniqueInput | null;
};
