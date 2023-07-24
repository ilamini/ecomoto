import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CAR_TITLE_FIELD } from "../car/CarTitle";

export const CarImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="car_id" source="car.id" reference="Car">
          <TextField source={CAR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deletedAt" source="deletedAt" />
        <TextField label="ID" source="id" />
        <TextField label="image_url" source="imageUrl" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
