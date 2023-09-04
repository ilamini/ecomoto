import { CommentUpdateManyWithoutCommunityFeedsInput } from "./CommentUpdateManyWithoutCommunityFeedsInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunityFeedUpdateInput = {
  comments?: CommentUpdateManyWithoutCommunityFeedsInput;
  community?: CommunityWhereUniqueInput | null;
  content?: string;
  creator?: UserWhereUniqueInput | null;
};
