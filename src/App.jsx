import { Header } from "@/Features/Header";
import { Box } from "@chakra-ui/react";
import { Landing } from "./Features/Landing";


export function App(){
    return <Box p={{base:10,md:20}}>
    <Header/>
    <Landing/>
    </Box>
}