import { Box, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import * as CSS from "csstype";

type SectionProps = {
    title: String;
    description: String;
    children?: JSX.Element | JSX.Element[];
}

export const Section = ({ title, description, children }: SectionProps) => (
    <Box margin={5} width="100%">
        <Flex
            textAlign={{ base: "center", lg: "start" }}
            direction="column"
        >
            <Heading>{title}</Heading>
            <Text marginTop={3} variant="secondary" marginBottom="2rem">{description}</Text>
        </Flex>
        {children}
    </Box>
)

type SectionCardProps = {
    minHeight: CSS.Property.MaxHeight | number,
    children?: JSX.Element | JSX.Element[];
}

export const SectionCard = ({ minHeight, children }: SectionCardProps) => (
    <SimpleGrid direction="column">
        <Box gridColumnStart={1}
            gridRowStart={1}
            backgroundColor="#24262B"
            width="100%"
            minHeight={minHeight}
            height="40vw"
            maxHeight="28.75rem"
            borderRadius="1.125rem" />
        <Flex
            gridColumnStart={1}
            gridRowStart={1}
            padding="3.125rem 3.125rem 0 3.125rem"
            direction="column"
            alignItems="center">
            {children}
        </Flex>
    </SimpleGrid>
)
