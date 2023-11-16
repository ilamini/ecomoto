import { CommunityFeed } from "../communityFeed/CommunityFeed";

export type Media = {
  communittFeed?: CommunityFeed | null;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  imageUrl: string | null;
  updatedAt: Date;
  videoUrl: string | null;
};
