import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMUNITY_TITLE_FIELD } from "./CommunityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommunityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="communityHeadeImgUrl" source="communityHeadeImgUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CommunityFeed"
          target="communityId"
          label="CommunityFeeds"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
