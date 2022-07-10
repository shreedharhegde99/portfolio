import React from "react";
import { Box, Flex, Text, Link, Center } from "@chakra-ui/react";
import { SiChakraui, SiReact } from "react-icons/si";
import { TiHeart } from "react-icons/ti";

function Footer() {
	return (
		<>
			<hr />
			<Center
				fontSize={["small", "md"]}
				flexWrap="wrap"
				p="10"
				bgColor={"gray.200"}
			>
				Built with <TiHeart color="#e91e63" size={"1.5rem"} /> using
				<Link href="https://reactjs.org/" isExternal>
					<Flex pl="2" pr="2">
						<Box pt="1">
							<SiReact
								color="rgb(50, 136, 124)"
								size={"1.1rem"}
							/>
						</Box>
						<Box pl="1">React</Box>
					</Flex>
				</Link>
				<Text>and</Text>
				<Link href="https://chakra-ui.com/" isExternal>
					<Flex pl="2" pr="2">
						<Box pt="1">
							<SiChakraui color="#3ac7bc" size="1rem" />
						</Box>
						<Box pl="1">Chakra UI</Box>
					</Flex>
				</Link>
			</Center>
		</>
	);
}

export default Footer;
