import * as CSS from "csstype"
import {
  Box, Button, Flex, Text, Heading, VStack, HStack, Spacer, SimpleGrid,
  Center, Image, Tabs, TabList, Tab, TabPanels, TabPanel, Link
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Section from "../components/section";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Home: NextPage = () => (
  <>
    <Head>
      <title>goxy.pl</title>
      <meta name="description" content="Goxy - Twoje dedykowane rozwiązanie proxy" />
      <link rel="icon" href="/static/favicon.ico" />
    </Head>

    <NavBar />

    <main>
      <Center>
        <VStack spacing={{ base: "4.75rem", xl: "8.75rem" }} maxWidth="71rem" margin="0 2rem">
          <Hero />

          <Zalets />

          <Features />

          <AvailablePlans />

          <BetaStage />

          <Footer />
        </VStack>
      </Center>
    </main>
  </>
)

const Hero = () => (
  <Flex
    align="center"
    direction={{ base: "column", xl: "row" }}
    textAlign={{ base: "center", xl: "left" }}
    justifyContent={"center"}
    margin="0 3rem 10rem 3rem"
    paddingTop="25vh"
    minHeight="30rem"
    height="calc(50vh)"
  >
    <Box marginBottom={10} zIndex="1">
      <Box marginBottom="0.875rem" marginRight={{ base: "0", xl: "5rem" }}>
        <Heading fontSize={{ base: "2rem", md: "2.6rem" }}>
          Wymień swoje proxy na dedykowane rozwiązanie{" "}
          <Text
            as="span"
            background="linear-gradient(94.3deg, #D091DA 0%, #AD00FF 200.63%)"
            backgroundClip="text"
          >
            goxy
          </Text>
        </Heading>

        <Text variant="secondary" marginTop={2} marginBottom={7}>
          Oferujemy wszystkie podstawowe funkcjonalności, które zamienią Twój
          aktualny serwer proxy dając Ci dodatkowe funkcjonalności takie jak system logowania,
          automatyczne logowanie premium, ochronę przed botami czy ochronę przed atakami DDoS.
        </Text>
      </Box>
    </Box>

    <Image
      src="/static/logo.svg" alt="Strona Główna goxy"
      maxWidth="420px"
      zIndex="10"
    />
  </Flex>
)

const StatisticEntry = ({ textColor }: { textColor: CSS.Property.Color; }) => (
  <Box align="center" m="1rem 3rem">
    <Text fontSize="2.25rem"
      fontWeight={800}
      backgroundImage={"linear-gradient(110deg, " + textColor + ", #AD00FF)"}
      backgroundClip="text">
      75683
    </Text>
    <Text fontSize="18px">osób uruchomiło</Text>
    <Text fontWeight={700} color={"#000"}>goxy</Text>
    <Text fontSize="18px">w ostatnich 30 dniach</Text>
  </Box>
);

const Zalets = () => (
  <Section
    id="zalets"
    title="Co sprawia, że zakochasz się w goxy?"
  >
    <SimpleGrid
      columns={{ base: 1, lg: 3 }}
      spacing={12}
    >
      <ZaletsEntry
        icon="rocket"
        title="Stabilność"
        description={"Goxy jest zaprojektowane tak żeby zużywało jak najmniej możliwych zasobów. " +
          "Nasze serwery są dobrane w taki sposób żeby uzyskać jak największą wydajność. " +
          "Wszystko po to żeby Twój serwer był jak najbardziej stabilny!."} />

      <ZaletsEntry
        icon="shield"
        title="Bezpieczeństwo"
        description={"Hasła wszystkich zarejestrowanych graczy za pomocą goxy są hashowane, " +
          "a dostęp do naszej bazy danych jest zabezpieczony. Korzystajac z goxy ukrywasz prawdziwe IP serwera, " +
          "a nawet jeśli ktoś próbuje się połączyć z prawdziwym IP Twojego serwera to nie jest na niego wpuszczony."} />

      <ZaletsEntry
        icon="thumb"
        title="Prostota"
        description={"Wszystkie funkcje oferowane przez goxy zostały zaprojektowane tak " +
          "żeby dało się je wyłączyć kiedy tego potrzebujesz. Wszystko to czego potrzebujesz ustawisz w naszym panelu " +
          "bez żadnych komplikacji, a jeśli masz taką potrzebę, możesz konfigurować swój serwer za pomocą poleceń w grze."} />
    </SimpleGrid>
  </Section>
)

type ZaletsEntryProps = { title: string; description: string; icon: string; }

const ZaletsEntry: React.FC<ZaletsEntryProps> = ({ title, description, icon }) => (
  <Flex flexDirection="column" gap="15px">
    <Flex backgroundColor="#FCECFF" width="3.375rem" height="3.375rem" borderRadius="10">
      <Image src={"/static/landing/" + icon + ".svg"} alt="Strona Główna goxy" margin="auto" />
    </Flex>

    <Heading size="md">{title}</Heading>
    <Text>{description}</Text>
  </Flex>
)

const Features = () => {
  return (
    <Section
      id="features"
      title="Funkcje"
    >
      <Tabs variant="line" width="100%" isFitted>
        <TabList padding="0 4.5rem">
          <Tab>Anty bot</Tab>
          <Tab>Logowanie</Tab>
          <Tab>Naprawa skinów</Tab>
          <Tab>Load balancer</Tab>
          <Tab>Anty DDoS</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Feature />
          </TabPanel>
          <TabPanel>
            <Feature />
          </TabPanel>
          <TabPanel>
            <Feature />
          </TabPanel>
          <TabPanel>
            <Feature />
          </TabPanel>
          <TabPanel>
            <Feature />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  )
}

const Feature = () => (
  <Flex
    marginTop={{ base: "1.125rem", lg: "3.125rem" }}
    flexDirection={{ base: "column", md: "row" }}
    alignItems={{ base: "center", md: "start" }}
    gap="4.375rem"
  >
    <Flex
      flexShrink="0"
      borderRadius="25"
      borderColor="#CDC4CC"
      borderWidth="1px"
      overflow="clip"
      width="40%"
      height="80%"
      backgroundColor="#FCECFF"
      padding="2rem 2rem 0 0"
    >
      <Image
        src="/static/landing/vcn.png" alt="Wygląd systemu Anty bot w grze - obrazek captcha."
        objectFit="cover"
      />
    </Flex>

    <Box>
      <Heading size="md">Weryfikacja odbywa się po stronie proxy</Heading>
      <br />
      <Text>Weryfikacja chroniąca przed botami odbywa się po wejściu gracza na serwer w ramach, której gracz może zostać poproszony o przepisanie kodu captcha z obrazka wyświetlonego w grze. </Text>
      <br />
      <Text>Nic skomplikowanego, a dzięki temu żaden bot nie przedostanie się na serwer. </Text>
    </Box>
  </Flex>
)

const AvailablePlans = () => (
  <Section
    id="plans"
    title="Cennik"
  >
    <Flex
      flexDirection={{ base: "column", xl: "row" }}
      alignItems="center"
      width="100%"
      justifyContent="space-between"
    >
      <Plan name="Darmowy*" price={0}>
        Pakiet dla początkujących serwerów dla rozwinięcia skrzydeł bez potrzeby wydawania dużych pieniędzy.<br/>
        <br/>
        *Opłata instalacyjna 10 PLN.
      </Plan>
      <Plan name="Podstawowy" price={30}>
        Podstawowy pakiet dla serwerów, które potrafią się utrzymać ze swoich zarobków i mają już zbudowane grono graczy.
      </Plan>
      <Plan name="Profesjonalny" price={80} pro>
        Pakiet dla początkujących sieci i średnich serwerów. Pozwala bez problemów konkurować z innymi serwerami.
      </Plan>
    </Flex>

    <Flex flexDirection="column" textAlign="center" marginTop="3.75rem" gap="1rem">
      <Heading>Dostępne plany ci nie wystarczają?</Heading>
      <Text>Napisz do nas, a przygotujemy pakiet spersonalizowany specjalnie dla twojego serwera!</Text>
      <Button size="lg" margin="auto" colorScheme="black">Skontaktuj się z nami</Button>
    </Flex>
  </Section>
);

type PlanProps = {
  name: string,
  price: number,
  pro?: boolean,
  children: React.ReactNode,
};

const Plan = ({ name, price, pro = false, children }: PlanProps) => (
  <Box
    width="21rem"
    height="24.25rem"
    borderRadius="25"
    borderWidth="1px"
    borderColor={pro ? "#C684D0" : "#CDC4CC"}
    padding="2.5rem"
    marginBottom="1rem"
  >
    <Flex flexDirection="column" gap="0.875rem" height="100%">
      <Heading size="md">{name}</Heading>
      <Flex alignItems="end" gap="0.5rem">
        <Heading size="xl">{price} PLN</Heading>
        <Heading size="md" fontWeight="normal" lineHeight="180%">/msc</Heading>
      </Flex>
      <Text>{children}</Text>
      <Spacer />
      <Button margin="0 1.5rem" size="lg" colorScheme={pro ? "pink" : "black"}>Więcej informacji</Button>
    </Flex>
  </Box>
);

const BetaStage = () => (
  <Section id="beta" title="Otwarte beta testy">
    <Text>
      Przed wprowadzeniem w pełni naszego rozwiązania na rynek chcemy je najpierw dobrze przetestować,
      aby najbardziej wymagający klienci mieli pewność, że nic ich i nas nie zaskoczy.
      Z tej okazji przygotowaliśmy dla małych i średnich serwerów możliwość uczestniczenia w
      otwartych beta testach zupełnie za darmo. Z powodu, że w ramach testów usługa będzie darmowa,
      nie możemy sobie pozwolić na serwery najwyższej jakości. Może to oznaczać mniejszą stabilność
      usług w trakcie poważniejszych ataków.
      Po upewnieniu się, że zainteresowanie goxy jest wystarczające, a rozwiązania do monitorowania,
      wdrażania, optymalizowania i ochrony są dobrej jakości - nasza infrastruktura zostanie ulepszona,
      a usługa stanie się oficjalnie otwarta dla wszystkich.
    </Text>

    <Box
      borderRadius="30"
      padding="2.5rem 3.125rem"
      backgroundColor="red"
      width="100%"
      marginTop="3.75rem"
      background="linear-gradient(87.57deg, #F4CAFC 20.94%, #C6DDFF 61.89%, #D096FE 117.21%)"
      gap="1.6rem"
    >
      <Heading size="lg">
        Goxy jest w fazie testów.<br />
        Jesteś chętny wypróbować?
      </Heading>
      <Button marginTop="1.6rem" size="lg" colorScheme="black">Skontaktuj się z nami</Button>
    </Box>
  </Section >
);

export default Home

// 12:15
