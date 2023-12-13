import { CommentCreateNestedManyWithoutUserFeedsInput } from "./CommentCreateNestedManyWithoutUserFeedsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MediaCreateNestedManyWithoutUserFeedsInput } from "./MediaCreateNestedManyWithoutUserFeedsInput";

export type UserFeedCreateInput = {
  comments?: CommentCreateNestedManyWithoutUserFeedsInput;
  content: string;
  creator?: UserWhereUniqueInput | null;
  media?: MediaCreateNestedManyWithoutUserFeedsInput;
};
