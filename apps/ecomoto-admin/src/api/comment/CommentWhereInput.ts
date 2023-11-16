import { CommentLikeListRelationFilter } from "../commentLike/CommentLikeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  commentLikes?: CommentLikeListRelationFilter;
  comments?: StringNullableFilter;
  communityFeed?: CommunityFeedWhereUniqueInput;
  creator?: UserWhereUniqueInput;
  id?: StringFilter;
};
