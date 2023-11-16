import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FeedLikeListRelationFilter } from "../feedLike/FeedLikeListRelationFilter";
import { MediaListRelationFilter } from "../media/MediaListRelationFilter";

export type CommunityFeedWhereInput = {
  comments?: CommentListRelationFilter;
  community?: CommunityWhereUniqueInput;
  content?: StringFilter;
  creator?: UserWhereUniqueInput;
  feedLikes?: FeedLikeListRelationFilter;
  id?: StringFilter;
  medias?: MediaListRelationFilter;
};
