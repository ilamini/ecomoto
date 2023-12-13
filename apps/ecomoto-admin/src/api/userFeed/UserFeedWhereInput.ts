import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MediaListRelationFilter } from "../media/MediaListRelationFilter";

export type UserFeedWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringFilter;
  creator?: UserWhereUniqueInput;
  id?: StringFilter;
  media?: MediaListRelationFilter;
};
