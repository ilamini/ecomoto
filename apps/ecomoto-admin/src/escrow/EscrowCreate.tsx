import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { RentalTitle } from "../rental/RentalTitle";

export const EscrowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="blockchainHash" source="blockchainHash" />
        <TextInput label="Deleted At" source="deletedAt" />
        <NumberInput label="DepositAmount" source="depositAmount" />
        <SelectInput
          source="depositStatus"
          label="DepositStatus"
          choices={[
            { label: "Active", value: "Active" },
            { label: "Settled", value: "Settled" },
            { label: "Reversed", value: "Reversed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="rentalId.id"
          reference="Rental"
          label="rental_id"
        >
          <SelectInput optionText={RentalTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
