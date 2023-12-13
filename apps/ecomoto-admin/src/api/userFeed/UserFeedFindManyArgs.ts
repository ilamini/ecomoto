import { UserFeedWhereInput } from "./UserFeedWhereInput";
import { UserFeedOrderByInput } from "./UserFeedOrderByInput";

export type UserFeedFindManyArgs = {
  where?: UserFeedWhereInput;
  orderBy?: Array<UserFeedOrderByInput>;
  skip?: number;
  take?: number;
};
