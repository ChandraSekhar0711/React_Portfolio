import { useEffect, useRef, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
  useColorMode,
} from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
import { useTranslation } from "react-i18next";
import { Badges } from "@/components/Badges";
import { DownloadIcon } from "@chakra-ui/icons";

const SKILLS = [
  { label: "React" },
  { label: "Redux" },
  { label: "Javascript" },
  { label: "Git" },
  { label: "CSS" },
  { label: "Bootstrap" },
  { label: "HTML" },
  { label: "Python" },
  { label: "Ansible" },
];

export function Landing() {
  // eslint-disable-next-line no-unused-vars
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation("home");

  // Parallax effect state
  const [offset, setOffset] = useState(0);
  const landingRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (landingRef.current) {
        const { top } = landingRef.current.getBoundingClientRect();
        setOffset(top * 0.2); // Adjust the parallax effect speed as needed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const left = (
    <Box>
      <Heading
        fontSize={{ base: "3xl", md: "4xl", xl: "7xl" }}
        color={colorMode === "light" ? "secondary" : "Light"}
        whiteSpace="pre-line"
        transform={`translateY(${offset}px)`}
      >
        {t("greetings")}
        <Text as="span" color="primary.dark">
          .
        </Text>{" "}
      </Heading>
      <Text
        color={colorMode === "light" ? "secondary" : "Light"}
        fontSize="lg"
        transform={`translateY(${offset}px)`}
      >
        {t("iAm")}{" "}
        <Text as="span" fontWeight="bold">
          {t("job")},{" "}
        </Text>
        {t("location")}
      </Text>
      <Wrap mt={"1.5"} transform={`translateY(${offset}px)`} >
      <Button >
      <DownloadIcon/>&nbsp;&nbsp;Resume
      </Button>
      </Wrap>
      
      
      <Wrap mt={"14"} transform={`translateY(${offset}px)`}>
        {SKILLS.map((skill, index) => (
          <WrapItem key={index}>
            <Badges bg={skill.label}>{skill.label}</Badges>
          </WrapItem>
        ))}
      </Wrap>

      
    </Box>
    
  );

  const badgeExperience = (
    <Badge bg="primary.light" borderRadius={7} padding={3} textAlign="center">
      <Text color="secondary" fontSize="xl">
        {new Date().getFullYear() - 2021}
      </Text>
      <Text color="secondary">{t("yearsExp")}</Text>
    </Badge>
  );

  const right = (
    <Box mt={{ base: 10, md: 0 }} transform={`translateY(${offset}px)`}>
      <Flex justify="flex-end">{badgeExperience}</Flex>
      <Image src={humanImg} w={400} />
    </Box>
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-evenly"
      mt={{ base: 50, md: 28 }}
      ref={landingRef}
    >
      {left}
      {right}
    </Flex>
  )
}
