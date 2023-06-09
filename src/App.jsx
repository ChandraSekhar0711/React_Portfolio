import { Header } from "@/Features/Header";
import { Box } from "@chakra-ui/react";
import { Landing } from "./Features/Landing";
import { LatestProjects } from "./Features/LatestProjects";
//import { ImageSlider } from "./components/imageSlider/ImageSlider";


export function App(){

      return (
        <Box p={20}>
          <Header />
          <Landing />
          <LatestProjects/>
        </Box>
      );
}