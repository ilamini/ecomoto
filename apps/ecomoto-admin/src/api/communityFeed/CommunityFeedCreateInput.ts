import { CommentCreateNestedManyWithoutCommunityFeedsInput } from "./CommentCreateNestedManyWithoutCommunityFeedsInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunityFeedCreateInput = {
  comments?: CommentCreateNestedManyWithoutCommunityFeedsInput;
  community?: CommunityWhereUniqueInput | null;
  content: string;
  creator?: UserWhereUniqueInput | null;
};
