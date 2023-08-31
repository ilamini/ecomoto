import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CarImageTitle } from "../carImage/CarImageTitle";
import { UserTitle } from "../user/UserTitle";
import { RentalTitle } from "../rental/RentalTitle";

export const CarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="carImages"
          reference="CarImage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CarImageTitle} />
        </ReferenceArrayInput>
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
    </Create>
  );
};
