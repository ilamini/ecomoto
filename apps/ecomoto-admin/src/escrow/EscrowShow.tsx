import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RENTAL_TITLE_FIELD } from "../rental/RentalTitle";

export const EscrowShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="blockchainHash" source="blockchainHash" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="DepositAmount" source="depositAmount" />
        <TextField label="DepositStatus" source="depositStatus" />
        <TextField label="ID" source="id" />
        <ReferenceField label="rental_id" source="rental.id" reference="Rental">
          <TextField source={RENTAL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
