import { CommentUpdateManyWithoutUserFeedsInput } from "./CommentUpdateManyWithoutUserFeedsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MediaUpdateManyWithoutUserFeedsInput } from "./MediaUpdateManyWithoutUserFeedsInput";

export type UserFeedUpdateInput = {
  comments?: CommentUpdateManyWithoutUserFeedsInput;
  content?: string;
  creator?: UserWhereUniqueInput | null;
  media?: MediaUpdateManyWithoutUserFeedsInput;
};
