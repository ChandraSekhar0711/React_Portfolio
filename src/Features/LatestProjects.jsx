import { Badges } from "@/components/Badges";
import { ImageSlider } from "@/components/imageSlider/ImageSlider";
import { Box, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FAKE_PROJECTS = [
    {
        id: 1,
        title: "Project 1",
        description: "A project about this",
        technologies: ["React", "ES6", "HTML", "CSS"],
        images: [
            "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        ],
    },
    {
        id: 2,
        title: "Project 2",
        description: "A project about that",
        technologies: ["React", "Redux", "HTML", "CSS", "ES6"],
        images: [
            "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
            "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        ],
    },
    {
        id: 3,
        title: "Project 3",
        description: "A project about things",
        technologies: [
            "React",
            "Redux",
            "HTML",
            "CSS",
            "ES6",
            "Vercel",
            "Bootstrap",
        ],
        images: [
            "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        ],
    },
];
export function LatestProjects() {
    const {t} = useTranslation("home");
    const [projects, setProjects] = useState(FAKE_PROJECTS);
    const renderProjects = (project) => {
        return <WrapItem flexDirection={"column"} key={project.id}>
            
            <ImageSlider imageList={project.images}/>
            <Heading size={"md"} color="secondary" mt="3" >
                <Box display={"inline-block"} h={1} w={25} bg={"primary.dark"} mr={3} verticalAlign={"middle"} />
                {project.title}</Heading>
                <Text>{project.description}</Text>
                <Wrap mt={"2"} maxWidth={350}>
            {project.technologies.map((skill,index)=>(
            <WrapItem  key={index}>
                <Badges bg={skill}>{skill}</Badges>
            </WrapItem>
        ))}
        </Wrap>
        </WrapItem>
    }
    return (
        <Flex direction={"column"} w="100%">
            <Heading>{t("project")}</Heading>
            <Wrap mt={10} spacing={16} >
                {projects?.map(renderProjects)}
            </Wrap>
        </Flex>
    );
}