import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserFeedWhereUniqueInput } from "../userFeed/UserFeedWhereUniqueInput";

export type MediaWhereInput = {
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  userFeed?: UserFeedWhereUniqueInput;
  videoUrl?: StringNullableFilter;
};
