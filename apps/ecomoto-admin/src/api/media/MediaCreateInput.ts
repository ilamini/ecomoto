import { UserFeedWhereUniqueInput } from "../userFeed/UserFeedWhereUniqueInput";

export type MediaCreateInput = {
  createdBy?: string | null;
  imageUrl?: string | null;
  userFeed?: UserFeedWhereUniqueInput | null;
  videoUrl?: string | null;
};
