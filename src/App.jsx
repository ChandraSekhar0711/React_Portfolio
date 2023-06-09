import { Header } from "@/Features/Header";
import { Box } from "@chakra-ui/react";
import { Landing } from "./Features/Landing";
import { LatestProjects } from "./Features/LatestProjects";
import { Footer } from "./Features/Footer";
//import { ImageSlider } from "./components/imageSlider/ImageSlider";


export function App(){

      return (
        <>
        <Box p={{base:10,md:20}}>
          <Header />
          <Landing />
          <LatestProjects/>
        </Box>
        <Footer/>
        </>
        
      );
}