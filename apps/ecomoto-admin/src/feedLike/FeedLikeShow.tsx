import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COMMUNITYFEED_TITLE_FIELD } from "../communityFeed/CommunityFeedTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FeedLikeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="communityFeed"
          source="communityfeed.id"
          reference="CommunityFeed"
        >
          <TextField source={COMMUNITYFEED_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="likeBy" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
