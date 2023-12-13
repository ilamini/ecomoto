import { User } from "../user/User";

export type Community = {
  communityHeadeImgUrl: string;
  createdAt: Date;
  description: string;
  id: string;
  members?: Array<User>;
  name: string;
  updatedAt: Date;
};
