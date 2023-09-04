import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { RentalTitle } from "../rental/RentalTitle";

export const CarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="Deleted At" source="deletedAt" />
        <ReferenceInput source="lessorId.id" reference="User" label="lessorId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="make" source="make" />
        <TextInput label="model" source="model" />
        <div />
        <TextInput label="registration_info" source="registrationInfo" />
        <ReferenceArrayInput
          source="rentals"
          reference="Rental"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentalTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
