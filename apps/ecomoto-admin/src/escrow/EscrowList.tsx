import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RENTAL_TITLE_FIELD } from "../rental/RentalTitle";

export const EscrowList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Escrows"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
