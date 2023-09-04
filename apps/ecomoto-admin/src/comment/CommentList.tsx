import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMUNITYFEED_TITLE_FIELD } from "../communityFeed/CommunityFeedTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
