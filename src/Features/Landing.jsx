import { Badge, Box, Flex, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
import { useTranslation } from "react-i18next";
import { Badges } from "@/components/Badges";
const SKILLS = [
    {"label": "React"},
    {"label": "Redux"},
    {"label": "Javascript"},
    {"label": "Bootstrap"},
    {"label": "Python"},
    {"label": "Ansible"},


];
export function Landing() {
    const {t} = useTranslation("home");
    const left = <Box>
        <Heading fontSize={{ base: "3xl", md: "4xl", xl: "7xl" }} color="secondary" whiteSpace="pre-line">{t("greetings")}<Text as="span" color="primary.dark">.</Text> </Heading>
        <Text color="secondary" fontSize="lg">{t("iAm")} <Text as="span" fontWeight="bold" >{t("job")}, </Text>{t("location")}</Text>
        
        <Wrap mt={"14"}>
        {SKILLS.map((skill,index)=>(
            <WrapItem  key={index}>
                <Badges bg={skill.label}>{skill.label}</Badges>
            </WrapItem>
        ))}
        </Wrap>
        
    </Box>;
    const badgeExperience = <Badge bg="primary.light" borderRadius={7} padding={3} textAlign="center">
        <Text color="secondary" fontSize="xl"> {new Date().getFullYear()-2021}</Text>
        <Text>{t("yearsExp")}</Text>

    </Badge>
    const right =
        <Box mt={{ base: 10, md: 0 }}>
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