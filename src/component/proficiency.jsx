import React from "react";
import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";

function Proficiency() {
	return (
		<>
			<Flex
				justify="center"
				padding={"1rem"}
				bgColor="gray.100"
				fontSize="xl"
				fontWeight={"bold"}
				fontFamily="Playfair Display"
			>
				<Box color={'gray.500'}>Proficiencies</Box>
			</Flex>
			<hr />
			{/* content area */}
			<Box  bgColor={'red.50'} >
				<Flex
					p="2rem 10%"
					direction={["column", "row"]}
					alignItems="center"
					justify="center"
					wrap={"wrap"}
					textAlign="center"
				>
					<Flex
						direction={"column"}
						maxW="150px"
						p="0.5rem"
						ml={[0, "5rem"]}
						mt={["1rem", 0]}
					>
						<Box pb="1rem">
							<Img
								src="https://madhu-kum.github.io/img/Group%2011.png"
								alt="frontend"
								mb="1rem"
							/>
						</Box>
						<Heading as="div" size="sm" p="1rem">
							Frontend
						</Heading>
						<Text fontSize="xs" fontWeight={"bold"}>
							HTML, CSS, JS{" "}
						</Text>
					</Flex>

					<Flex
						direction={"column"}
						maxW="150px"
						p="0.5rem"
						ml={[0, "5rem"]}
						mt={["0.5rem", 0]}
					>
						<Box pb="1rem">
							<FaReact size="lg" color="#3ecdbc" />
						</Box>
						<Heading as="div" size="sm" p="1rem">
							React App
						</Heading>
						<Text fontSize="xs" fontWeight={"bold"}>
							React App and React Js
						</Text>
					</Flex>
				</Flex>
      </Box>
      <hr />
		</>
	);
}

export default Proficiency;
