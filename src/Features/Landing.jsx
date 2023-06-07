import { Badge, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
export function Landing() {
    const left = <Box>
        <Heading fontSize={{ base: "3xl", md: "4xl", xl: "7xl" }} color="secondary" >Hi, my name<br /> is Chandra Sekhar<Text as="span" color="primary.dark">.</Text> </Heading>
        <Text color="secondary" fontSize="lg">I am <Text as="span" fontWeight="bold" >a Front-End developer,</Text>  located in INDIA</Text>
    </Box>;
    const badgeExperience = <Badge bg="primary.light" borderRadius={7} padding={3} textAlign="center">
        <Text color="secondary">
            1.6
            <Text>YEARS OF EXPERIENCE</Text>
            </Text>
    </Badge>
    const right = <Box>
    <Flex justify="flex-end">{badgeExperience}</Flex>
        <Image src={humanImg} w={400} />
    </Box>;
    return (
        <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-evenly"
            mt={{ base: 50, md: 150 }}
        >
            {left}
            {right}
        </Flex>
    );
}