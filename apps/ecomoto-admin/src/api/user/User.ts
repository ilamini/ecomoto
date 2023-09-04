import { Car } from "../car/Car";
import { Comment } from "../comment/Comment";
import { Community } from "../community/Community";
import { CommunityFeed } from "../communityFeed/CommunityFeed";
import { Rental } from "../rental/Rental";
import { JsonValue } from "type-fest";

export type User = {
  cars?: Array<Car>;
  comments?: Array<Comment>;
  communities?: Array<Community>;
  communityFeeds?: Array<CommunityFeed>;
  createdAt: Date;
  deletedAt: Date | null;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  rentals?: Array<Rental>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userType?: "Lessee" | "Lessor";
};
