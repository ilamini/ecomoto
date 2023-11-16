import { CommentLikeListRelationFilter } from "../commentLike/CommentLikeListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { CommunityListRelationFilter } from "../community/CommunityListRelationFilter";
import { CommunityFeedListRelationFilter } from "../communityFeed/CommunityFeedListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FeedLikeListRelationFilter } from "../feedLike/FeedLikeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  commentLikes?: CommentLikeListRelationFilter;
  comments?: CommentListRelationFilter;
  communities?: CommunityListRelationFilter;
  communityFeeds?: CommunityFeedListRelationFilter;
  deletedAt?: DateTimeNullableFilter;
  email?: StringFilter;
  feedLikes?: FeedLikeListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  userType?: "Lessee" | "Lessor";
};
