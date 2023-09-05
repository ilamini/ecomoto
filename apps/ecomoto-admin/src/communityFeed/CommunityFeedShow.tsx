import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMMUNITYFEED_TITLE_FIELD } from "./CommunityFeedTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";

export const CommunityFeedShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="community"
          source="community.id"
          reference="Community"
        >
          <TextField source={COMMUNITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="creator" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="communityFeedId"
          label="Comments"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
