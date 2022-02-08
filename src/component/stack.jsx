import React from "react";
import { Box, Flex } from "@chakra-ui/react";

function Stacks({ icon, text }) {
	return (
		<>
			<Flex
				direction={"column"}
				align="space-around"
				p="1rem"
				alignItems="center"
				fontWeight={"bold"}
			>
				<Box p="0.5rem">{icon}</Box>
				<Box>{text}</Box>
      </Flex>
      
		</>
	);
}

export default Stacks;
