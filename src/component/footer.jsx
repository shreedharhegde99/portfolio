import React from "react";
import {
  Box, Center, Flex
  , Text, Link
} from "@chakra-ui/react";
import { SiChakraui, SiReact } from "react-icons/si";
import { TiHeart } from "react-icons/ti";

function Footer() {
	return (
		<>
			<hr />
			<Flex
				bgColor={"gray.200"}
				justify="center"
				fontSize={["10px", "12px", "15px"]}
				p="4"
			>
				<Center textAlign={"center"} pt="1">
					<Flex p="1" pr="2">
						Proudly built with
						<Box >
							<TiHeart color="rgb(233, 30, 99)" size='1.5rem' />
						</Box>
						using
					</Flex>
					<Link href="https://chakra-ui.com/" isExternal>
						<Box>
							<SiChakraui color="#3ac7be" size="1rem" />
						</Box>
					</Link>
					<Text padding="2px 4px">Chakra UI and</Text>

					<Box pl="2">
						<Link href="https://react-icons.github.io/react-icons" isExternal>
							<SiReact color="#e91e63" size="1rem" />
						</Link>
					</Box>
					<Text p="1">React Icons</Text>
				</Center>
			</Flex>
		</>
	);
}

export default Footer;
