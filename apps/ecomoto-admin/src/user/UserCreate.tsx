import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateInput,
  TextInput,
  PasswordInput,
  SelectInput,
} from "react-admin";

import { CarTitle } from "../car/CarTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { RentalTitle } from "../rental/RentalTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cars"
          reference="Car"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CarTitle} />
        </ReferenceArrayInput>
        <DateInput label="Deleted At" source="deletedAt" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="rentals"
          reference="Rental"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentalTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <SelectInput
          source="userType"
          label="userType"
          choices={[
            { label: "Lessee", value: "Lessee" },
            { label: "Lessor", value: "Lessor" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
