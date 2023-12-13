import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CommunityWhereInput = {
  communityHeadeImgUrl?: StringFilter;
  description?: StringFilter;
  id?: StringFilter;
  members?: UserListRelationFilter;
  name?: StringFilter;
};
