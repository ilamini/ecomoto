import { CommunityFeedListRelationFilter } from "../communityFeed/CommunityFeedListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CommunityWhereInput = {
  communityFeeds?: CommunityFeedListRelationFilter;
  communityHeadeImgUrl?: StringFilter;
  description?: StringFilter;
  id?: StringFilter;
  members?: UserListRelationFilter;
  name?: StringFilter;
};
