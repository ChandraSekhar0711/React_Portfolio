import { Flex, Heading } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export function Badges({bg,children}){
    return (
    <Flex justify={"center"} alignItems={"center"}>
        <Heading w={130} size={"sm"} bg={bg} color={"white"} borderRadius={3} px={3} py={3} textAlign={"center"}>
            {children}
            </Heading>
    </Flex>
    );
}