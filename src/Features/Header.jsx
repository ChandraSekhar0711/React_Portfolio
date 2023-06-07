import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagEnImg from "@/assets/images/flag-en.png";
//import flagFrImg from "@/assets/images/flag-fr.png";
export function  Header(){
    return (
        <Flex justify="space-between">
        <Image src={logoImg} h={10} />
        <HStack justify="space-between">
        <Image src={bubbleImg} h={10}/>
        <Link href="mailto:chandutogiri3@gmail.com?subject=Contacting you from your portfolio"
        fontSize="lg" 
        fontWeight="bold" >Hire Me</Link>
        <Image pl={20} src={flagEnImg} h={8}/>
        </HStack>
        </Flex>
    );
}