import React from 'react';
import { Flex, Box } from "@chakra-ui/react";
import Stacks from './stack';
import { SiHtml5, SiCss3, SiReact, SiJavascript,SiGit } from "react-icons/si";

function TechStack() {
  return (
		<>
			<Box>
				<Flex
					justify={"center"}
					p="1rem"
					bgColor={"gray.100"}
					fontSize="xl"
					fontWeight={"bold"}
					fontFamily="Playfair Display"
				>
					<Box color={'gray.500'}>Tech Stack</Box>
				</Flex>
				<hr />
				<Flex
					bgColor={"red.50"}
					p="1rem 20% 1rem 20%"
					justify={"space-between"}
					wrap="wrap"
					direction={["column", "row"]}
				>
					<Stacks
						icon={<SiHtml5 size={"4rem"} color="#39749e" />}
						text="HTML-5"
					/>

					<Stacks icon={<SiCss3 size={"4rem"} color="#39749e" />} text="CSS" />
					<Stacks
						icon={<SiJavascript size={"4rem"} color="#39749e" />}
						text="JAVASCRIPT"
					/>
					<Stacks
						icon={<SiReact size={"4rem"} color="#39749e" />}
						text="REACT"
					/>
					<Stacks icon={<SiGit size={"4rem"} color="#39749e" />} text="GIT" />
				</Flex>
			</Box>
			<hr />
		</>
	);
}



export default TechStack