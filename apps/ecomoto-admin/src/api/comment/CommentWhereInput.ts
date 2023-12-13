import { CommentLikeListRelationFilter } from "../commentLike/CommentLikeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserFeedWhereUniqueInput } from "../userFeed/UserFeedWhereUniqueInput";

export type CommentWhereInput = {
  commentLikes?: CommentLikeListRelationFilter;
  comments?: StringNullableFilter;
  creator?: UserWhereUniqueInput;
  id?: StringFilter;
  userFeed?: UserFeedWhereUniqueInput;
};
