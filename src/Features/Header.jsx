import {
    Button,
    Flex,
    HStack,
    Image,
    Link,
    useColorMode,
  } from "@chakra-ui/react";
  import logoImg from "@/assets/images/logo.png";
  import bubbleImg from "@/assets/images/bubble.png";
  import flagEnImg from "@/assets/images/flag-en.png";
  import { useTranslation } from "react-i18next";
  import flagFrImg from "@/assets/images/flag-fr.png";
  import { BsSun } from "react-icons/bs";
  import { MoonIcon } from "@chakra-ui/icons";
  import { useEffect, useRef, useState } from "react";
  
  export function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const sun = <BsSun />;
    const moon = <MoonIcon />;
  
    const { t, i18n } = useTranslation("home");
    const switchLanguage = () => {
      i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
    };
  
    // Parallax effect state
    const [offset, setOffset] = useState(0);
    const headerRef = useRef();
  
    useEffect(() => {
      const handleScroll = () => {
        if (headerRef.current) {
          const { top } = headerRef.current.getBoundingClientRect();
          setOffset(top * 0.2); // Adjust the parallax effect speed as needed
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <Flex
        justify="space-between"
        ref={headerRef}
        transform={`translateY(${offset}px)`}
      >
        <Image src={logoImg} h={10} />
        <HStack justify="space-between" pl={2} pr={2}>
          <Image src={bubbleImg} h={10} />
          <Link
            href="mailto:chandutogiri3@gmail.com?subject=Contacting you from your portfolio"
            fontSize="lg"
            fontWeight="bold"
          >
            {t("hireMe")}
          </Link>
          <Image
            onClick={switchLanguage}
            src={i18n.language === "en" ? flagEnImg : flagFrImg}
            h={8}
            cursor="pointer"
          />
          <Button onClick={toggleColorMode} variant="ghost" w={20}>
            {colorMode === "light" ? moon : sun}
          </Button>
        </HStack>
      </Flex>
    );
  }
  