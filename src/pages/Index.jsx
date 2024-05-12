import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={10} align="stretch">
        <Box as="header" textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Platform Name - Empowering Autonomous Software Engineering
          </Heading>
          <Text fontSize="xl">Revolutionizing software development with AI and Large Language Models.</Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1553678324-f84674bd7b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MTU1NDc5MzV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Futuristic Technology" />

        <Box as="section">
          <Heading as="h2" size="lg" mb={4}>
            About Platform Name
          </Heading>
          <Text>Platform Name is a leading SAAS platform designed for autonomous software engineers, utilizing AI and LLMs to transform the software development process. Say goodbye to manual coding and welcome intelligent automation.</Text>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg" mb={4}>
            Key Features
          </Heading>
          <Stack spacing={3}>
            <Text>
              <b>Autonomous Code Generation:</b> Automate the creation of complex code, enhancing focus on strategic problem-solving.
            </Text>
            <Text>
              <b>Intelligent Bug Detection:</b> Utilize advanced algorithms for real-time bug detection and resolution.
            </Text>
            <Text>
              <b>Dynamic Documentation:</b> Automatically generate comprehensive documentation from your codebase.
            </Text>
            <Text>
              <b>Collaborative Workflows:</b> Enhance team collaboration with intuitive tools for code reviews and project management.
            </Text>
            <Text>
              <b>Scalable Infrastructure:</b> A robust, cloud-based infrastructure that grows with your business needs.
            </Text>
          </Stack>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg" mb={4}>
            Why Choose Platform Name
          </Heading>
          <Stack spacing={3}>
            <Text>
              <b>Unmatched Efficiency:</b> Automate repetitive tasks and leverage AI-driven insights to work smarter.
            </Text>
            <Text>
              <b>Innovation at Your Fingertips:</b> Access cutting-edge technology and best practices in autonomous software engineering.
            </Text>
            <Text>
              <b>Exceptional Support:</b> Our dedicated team ensures a smooth and seamless experience at every step.
            </Text>
          </Stack>
        </Box>

        <Box textAlign="center">
          <Button rightIcon={<FaRocket />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
