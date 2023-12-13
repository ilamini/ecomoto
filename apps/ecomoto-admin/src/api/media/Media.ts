import { UserFeed } from "../userFeed/UserFeed";

export type Media = {
  createdAt: Date;
  createdBy: string | null;
  id: string;
  imageUrl: string | null;
  updatedAt: Date;
  userFeed?: UserFeed | null;
  videoUrl: string | null;
};
