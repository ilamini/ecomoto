import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COMMUNITYFEED_TITLE_FIELD } from "../communityFeed/CommunityFeedTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="comments" source="comments" />
        <ReferenceField
          label="CommunityFeed"
          source="communityfeed.id"
          reference="CommunityFeed"
        >
          <TextField source={COMMUNITYFEED_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="creator" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
