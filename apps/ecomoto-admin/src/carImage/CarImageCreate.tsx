import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CarTitle } from "../car/CarTitle";

export const CarImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="carId.id" reference="Car" label="car_id">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <TextInput label="deletedAt" source="deletedAt" />
        <TextInput label="image_url" source="imageUrl" />
      </SimpleForm>
    </Create>
  );
};
