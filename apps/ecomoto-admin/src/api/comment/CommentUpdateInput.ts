import { CommentLikeUpdateManyWithoutCommentsInput } from "./CommentLikeUpdateManyWithoutCommentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserFeedWhereUniqueInput } from "../userFeed/UserFeedWhereUniqueInput";

export type CommentUpdateInput = {
  commentLikes?: CommentLikeUpdateManyWithoutCommentsInput;
  comments?: string | null;
  creator?: UserWhereUniqueInput | null;
  userFeed?: UserFeedWhereUniqueInput | null;
};
