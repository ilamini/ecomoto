import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunityFeedWhereInput = {
  comments?: CommentListRelationFilter;
  community?: CommunityWhereUniqueInput;
  content?: StringFilter;
  creator?: UserWhereUniqueInput;
  id?: StringFilter;
};
