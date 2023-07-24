import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { RentalTitle } from "../rental/RentalTitle";

export const EscrowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
