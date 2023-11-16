import { CommentCreateNestedManyWithoutCommunityFeedsInput } from "./CommentCreateNestedManyWithoutCommunityFeedsInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FeedLikeCreateNestedManyWithoutCommunityFeedsInput } from "./FeedLikeCreateNestedManyWithoutCommunityFeedsInput";
import { MediaCreateNestedManyWithoutCommunityFeedsInput } from "./MediaCreateNestedManyWithoutCommunityFeedsInput";

export type CommunityFeedCreateInput = {
  comments?: CommentCreateNestedManyWithoutCommunityFeedsInput;
  community?: CommunityWhereUniqueInput | null;
  content: string;
  creator?: UserWhereUniqueInput | null;
  feedLikes?: FeedLikeCreateNestedManyWithoutCommunityFeedsInput;
  medias?: MediaCreateNestedManyWithoutCommunityFeedsInput;
};
