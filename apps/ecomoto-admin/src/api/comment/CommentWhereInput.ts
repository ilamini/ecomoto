import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  comments?: StringNullableFilter;
  communityFeed?: CommunityFeedWhereUniqueInput;
  creator?: UserWhereUniqueInput;
  id?: StringFilter;
};
