import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  Divider,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import moment from "moment";
const UserOrder = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const orders = useSelector((state) => state.order.orders);
  return (
    <div style={{ padding: "5%" }}>
      <Text fontSize="2xl" fontWeight="bold">
        Profile
      </Text>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Games</Th>
            <Th>Total</Th>
            <Th>status</Th>
            <Th>Create at</Th>
            <Th>Last update</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders &&
            orders.map((item, itemIndex) => (
              <Tr key={item._id}>
                <Td>{itemIndex + 1}</Td>
                <Td>
                  <VStack
                    divider={<StackDivider borderColor="gray.400" />}
                    spacing={2}
                    align="stretch"
                  >
                    {item.games &&
                      item.games.map((game) => (
                        <>
                          <Text key={game._id}>{game.name}</Text>
                        </>
                      ))}
                  </VStack>
                </Td>
                <Td>{item.total}</Td>
                <Td>{item.status}</Td>
                <Td>{moment(item.createdAt).format("LL")}</Td>
                <Td>{moment(item.updatedAt).format("LL")}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default UserOrder;
