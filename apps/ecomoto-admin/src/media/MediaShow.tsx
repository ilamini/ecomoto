import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERFEED_TITLE_FIELD } from "../userFeed/UserFeedTitle";

export const MediaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
