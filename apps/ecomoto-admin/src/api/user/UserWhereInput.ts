import { CarListRelationFilter } from "../car/CarListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { CommunityListRelationFilter } from "../community/CommunityListRelationFilter";
import { CommunityFeedListRelationFilter } from "../communityFeed/CommunityFeedListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";

export type UserWhereInput = {
  cars?: CarListRelationFilter;
  comments?: CommentListRelationFilter;
  communities?: CommunityListRelationFilter;
  communityFeeds?: CommunityFeedListRelationFilter;
  deletedAt?: DateTimeNullableFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  rentals?: RentalListRelationFilter;
  username?: StringFilter;
  userType?: "Lessee" | "Lessor";
};
