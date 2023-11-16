import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MediaWhereInput = {
  communittFeed?: CommunityFeedWhereUniqueInput;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  videoUrl?: StringNullableFilter;
};
