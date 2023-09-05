import { CommunityFeedUpdateManyWithoutCommunitiesInput } from "./CommunityFeedUpdateManyWithoutCommunitiesInput";
import { UserUpdateManyWithoutCommunitiesInput } from "./UserUpdateManyWithoutCommunitiesInput";

export type CommunityUpdateInput = {
  communityFeeds?: CommunityFeedUpdateManyWithoutCommunitiesInput;
  communityHeadeImgUrl?: string;
  description?: string;
  members?: UserUpdateManyWithoutCommunitiesInput;
  name?: string;
};
