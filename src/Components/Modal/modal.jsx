import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

export default function BasicUsage() {
  const { isOpen, setIsOpen, controlModal, setControlModal } =
    useContext(GlobalStateContext);
  return (
    <>
      <Modal isOpen={isOpen} onClose={setIsOpen}>
        <ModalOverlay />
        <ModalContent>
          {controlModal === 1 ? (
            <Flex
              w={"450px"}
              h={"220px"}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              gap={"20px"}
            >
              <Heading>Gotcha!</Heading>
              <Text fontWeight={"bold"}>
                The Pokémon has been added to your Pokédex!
              </Text>
            </Flex>
          ) : (
            <Flex
              w={"450px"}
              h={"220px"}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              gap={"20px"}
            >
              <Heading>Oh, no!</Heading>
              <Text fontWeight={"bold"}>
                The Pokémon has been removed from your Pokédex!
              </Text>
            </Flex>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
