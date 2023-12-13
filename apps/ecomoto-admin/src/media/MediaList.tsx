import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERFEED_TITLE_FIELD } from "../userFeed/UserFeedTitle";

export const MediaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"medias"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="UserFeed"
          source="userfeed.id"
          reference="UserFeed"
        >
          <TextField source={USERFEED_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="videoUrl" source="videoUrl" />
      </Datagrid>
    </List>
  );
};
