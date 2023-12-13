import { CommentLikeListRelationFilter } from "../commentLike/CommentLikeListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { CommunityListRelationFilter } from "../community/CommunityListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserFeedListRelationFilter } from "../userFeed/UserFeedListRelationFilter";

export type UserWhereInput = {
  commentLikes?: CommentLikeListRelationFilter;
  comments?: CommentListRelationFilter;
  communities?: CommunityListRelationFilter;
  deletedAt?: DateTimeNullableFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userFeeds?: UserFeedListRelationFilter;
  username?: StringFilter;
  userType?: "Lessee" | "Lessor";
};
