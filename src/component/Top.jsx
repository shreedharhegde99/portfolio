import React from "react";
import {
	Box,
	Flex,
	Heading,
	Text,
	Grid,
	GridItem,
	Button,
	Link,
} from "@chakra-ui/react";
import { VscLocation } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function HeadSection() {
	return (
		<>
			<Box
				height="3xs"
				bgGradient="linear(to-l, #7928CA, #FF0080)"
				p="2rem"
				clipPath=" polygon(0 0, 100% 0, 100% 20%, 0 60%)"
			></Box>
			<Flex
				justify={"center"}
				alignContent="center"
				mt="-13rem"
				position={"relative"}
			>
				<Box
					bgImage="url('https://i.imgur.com/EqxFQTF.jpg')"
					bgPosition="center"
					bgSize={"cover"}
					bgRepeat="no-repeat"
					height={["100px", "150px"]}
					width={["100px", "150px"]}
					borderRadius={["50px", "75px"]}
					border="solid 7px #44edffde"
					boxShadow={"0 0 10px #7d52ff"}
				/>
			</Flex>

			{/* location and contact */}
			<Box pt={"2rem"} align="center" fontFamily="Playfair Display">
				<Heading as="h3" fontSize={["lg", "2xl"]}>
					Shreedhar Hegde
				</Heading>
				<Text fontSize="lg" p="0.5rem">
					Frontend Developer
				</Text>
				<Flex
					justify={["normal", "normal", "center"]}
					align={["center", "center", "normal"]}
					direction={["column", "column", "row"]}
					p="0.5rem 0 1rem 0"
				>
					<Flex mt={["0.5rem", "0"]} pl="1rem" alignItems="center">
						<VscLocation color="blue" />
						<Text>Bangalore,India</Text>
					</Flex>
					<Flex mt={["0.5rem", "0"]} pl="1rem" alignItems="center">
						<IoIosCall color="blue" />
						<Link href="tel:+919482101148">
							<Text>+91 9482101148 </Text>
						</Link>
					</Flex>
					<Flex mt={["0.5rem", "0"]} pl="1rem" alignItems="center">
						<MdEmail color="blue" />
						<Link href="mailto:snhkelemane@gmail.com">
							<Text>snhkelemane@gmail.com</Text>
						</Link>
					</Flex>
				</Flex>
			</Box>

			{/* connections */}

			<Box pt="1rem" pb="1rem" fontFamily="Fira Sans">
				<Flex alignItems="center" justify="center">
					<Grid gap={8} templateColumns="repeat(2,auto)">
						<GridItem>
							<Link 
								href="https://www.linkedin.com/in/shreedharhegde99/"
								isExternal
							>
								<SiLinkedin size={"2.5rem"} color="blue" />
							</Link>
						</GridItem>

						<GridItem>
							<Link href="https://github.com/shreedharhegde99" isExternal>
								<SiGithub size={"2.5rem"} />
							</Link>
						</GridItem>
					</Grid>
				</Flex>

				{/* description */}

				<Text
					textAlign="center"
					p={["1rem 10% 2rem 10%", "1rem 20% 2rem 20%", "1.5rem 30% 2rem 30%"]}
					fontSize={"sm"}
				>
					Aspiring Frontend Web Developer who focuses on crafting clean and
					user-friendly experiences.Actively ready to join in a great lively
					team of a good start-up to adapt me in any situation and environment
					with ease and perform the best.
				</Text>

				{/* Resume */}
				<Flex p="2rem" justify={"center"}>
					<Link
						href="./assets/resume.pdf"
						download
						_hover={{
							textDecoration: "none",
						}}
					>
						<Button colorScheme="telegram" size="md">
							Download Resume
						</Button>
					</Link>
				</Flex>
			</Box>
			<hr />
		</>
	);
}

export default HeadSection;
