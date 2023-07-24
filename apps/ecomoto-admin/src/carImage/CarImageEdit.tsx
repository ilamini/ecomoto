import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CarTitle } from "../car/CarTitle";

export const CarImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="carId.id" reference="Car" label="car_id">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <TextInput label="deletedAt" source="deletedAt" />
        <TextInput label="image_url" source="imageUrl" />
      </SimpleForm>
    </Edit>
  );
};
