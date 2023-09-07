import { ProjectAPI } from "@/api/projects";
import { Badges } from "@/components/Badges";
import { ImageSlider } from "@/components/imageSlider/ImageSlider";
import { Badge, Box, Flex, HStack, Heading, Link, Text, Wrap, WrapItem, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function LatestProjects() {
    const { t, i18n } = useTranslation("home");
    const [projects, setProjects] = useState();
    // eslint-disable-next-line no-unused-vars
    const { colorMode, toggleColorMode } = useColorMode()
    useEffect(() => {
        (async () => {
            const allProjects = await ProjectAPI.fetchAll();
            setProjects(allProjects)
        })();
    }, []);
    const renderProjects = (project) => {
        return <WrapItem flexDirection={"column"} key={project.id} cursor="pointer">

            <ImageSlider imageList={project.images.map((image) => image.downloadURL)} />
            <HStack gap={100}>
                <Heading size={"md"} color={colorMode === 'light' ? 'secondary' : 'Light'} mt="3" >
                    <Box display={"inline-block"} h={1} w={25} bg={"primary.dark"} mr={3} verticalAlign={"middle"} />
                    {project.title}
                </Heading>

                <Badge ><Link href={project.previews} isExternal>DEMO</Link> </Badge>
            </HStack>
            <Text>{project.desc[i18n.language]}</Text>
            <Wrap mt={"2"} maxWidth={350}>
                {project.technologies.map((skill, index) => (
                    <WrapItem key={index}>
                        <Badges bg={skill}>{skill}</Badges>
                    </WrapItem>
                ))}
            </Wrap>
        </WrapItem>
    }
    return (
        <Flex direction={"column"} w="100%">
            <Heading>{t("project")}</Heading>
            <Wrap mt={10} spacing={{base:50,md:150}} >
                {projects?.map(renderProjects)}
            </Wrap>
        </Flex>
    );
}