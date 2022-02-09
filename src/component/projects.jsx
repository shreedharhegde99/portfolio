import React from "react"
import { Box, Center, Flex,  SimpleGrid } from "@chakra-ui/react"

import ProjectLayout from "./projectLayout";


function Projects() {
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
				<Center color="gray.500">Projects</Center>
			</Flex>
			<hr />

			{/* Projects showcase */}

			<Box p="2rem 10%">
				<SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
					<ProjectLayout
						img="https://i.imgur.com/MV8PauQ.png"
						heading="Analog Clock"
						content={"Simple Analog Clock .Created using Html,Css,Javascript"}
						repolink="https://github.com/shreedharhegde99/svg-clock"
						link="https://analog-clock-shreedharhegde99.vercel.app"
						html
						css
						javascript
					/>

					<ProjectLayout
						img="https://i.imgur.com/tZrxEGg.png"
						heading="Zerodha Clone"
						content="Zerodha Website UI re-created using Html,Css,Javscript  "
						repolink="https://github.com/shreedharhegde99/zerodha-clone"
						link="https://zerodhaclonesnh.netlify.app/"
						html
						css
						javascript
					/>
					<ProjectLayout
						img="https://i.imgur.com/wwmyP3B.png"
						heading="Calculator"
						content="Simple Calulator App. Created using Html,Css Javascript"
						repolink="https://github.com/shreedharhegde99/calculator"
						link="https://simple-calculator-snh.netlify.app/"
						html
						css
						javascript
					/>
				</SimpleGrid>
			</Box>
		</>
	);
}



export  default Projects