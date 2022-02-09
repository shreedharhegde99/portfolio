import React from "react";
import {
	Box,
	Center,
	Flex,
	Img,
	Link,
	Text,
} from "@chakra-ui/react";
import {
	SiGithub,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

function ProjectLayout({
	heading,
	img,
	content,
	repolink,
	link,
	html = false,
	css = false,
	javascript = false,
	react = false,
}) {
	return (
		<>
			<Center
				border="1px solid #ffadad "
				borderRadius={"8px"}
				boxShadow="5px 5px  5px #59f5d9 "
			>
				<Flex direction={"column"}>
					<Center mt="1" p="2" height="200px" maxH="200px" overflow="hidden">
						<Img src={img} height="190px" />
					</Center>
					<Center
						fontFamily={"Playfair Display"}
						fontWeight="bold"
						pt="2"
						fontSize={"lg"}
						bgColor="gray.50"
						maxW="100%"
					>
						{heading}
					</Center>
					<Center p="2">
						<Text fontSize={"xs"} align="center">
							{content}
						</Text>
					</Center>
					<Flex justify={"center"} fontSize="xs" color="gray.600" p="2">
						<Link href={repolink}>
							<Center p="1" fontWeight={"bold"}>
								<SiGithub color="black" size="0.8rem" />
								<Center p="1">GitHub</Center>
							</Center>
						</Link>
						<Link href={link}>
							<Center p="1" fontWeight={"bold"}>
								<FiExternalLink color="black" size="1rem" />
								<Center p="1">Demo Link</Center>
							</Center>
						</Link>
					</Flex>
					<Flex p="2" overflow={"hidden"} justify="center">
						{html && (
							<Box p="2">
								<SiHtml5 color="#ff5722" size="2rem" p="1" />
							</Box>
						)}
						{css && (
							<Box p="2">
								<SiCss3 size="2rem" color="#05a9f4" />
							</Box>
						)}
						{javascript && (
							<Box p="2">
								<SiJavascript color="#43853d" size="2rem" />
							</Box>
						)}
						{react && (
							<Box p="2">
								<SiReact size="2rem" color="#4dd0e1" />
							</Box>
						)}
					</Flex>
				</Flex>
			</Center>
		</>
	);
}

export default ProjectLayout;
