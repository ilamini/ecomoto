import { CommentUpdateManyWithoutCommunityFeedsInput } from "./CommentUpdateManyWithoutCommunityFeedsInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FeedLikeUpdateManyWithoutCommunityFeedsInput } from "./FeedLikeUpdateManyWithoutCommunityFeedsInput";
import { MediaUpdateManyWithoutCommunityFeedsInput } from "./MediaUpdateManyWithoutCommunityFeedsInput";

export type CommunityFeedUpdateInput = {
  comments?: CommentUpdateManyWithoutCommunityFeedsInput;
  community?: CommunityWhereUniqueInput | null;
  content?: string;
  creator?: UserWhereUniqueInput | null;
  feedLikes?: FeedLikeUpdateManyWithoutCommunityFeedsInput;
  medias?: MediaUpdateManyWithoutCommunityFeedsInput;
};
