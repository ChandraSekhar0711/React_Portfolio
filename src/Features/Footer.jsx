import { HStack, Icon, Link } from "@chakra-ui/react";
import { BsGithub,BsFacebook,BsInstagram,BsLinkedin } from "react-icons/bs";
export function Footer(){
    return (
        <HStack 
        justify={"center"}
        h={130}
        bg={"secondary"}
        gap={5}
        >
        <Link href="https://github.com/" target="_blank" >
        <Icon as={BsGithub} w={8} h={8} color={"white"} />
        </Link>
        <Link href="https://in.linkedin.com/" target="_blank">
        <Icon as={BsLinkedin} w={8} h={8} color={"#0D73C6"} bg={"white"} borderRadius={5} />
        </Link>
        <Link href="https://www.facebook.com/" target="_blank">
        <Icon as={BsFacebook} w={8} h={8} color={"white"} />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
        <Icon as={BsInstagram} w={8} h={8}  color={"#E1306C"}/>
        </Link>
        </HStack>
    );
}