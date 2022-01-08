import Head from "next/head";
import { Box, Container } from "@chakra-ui/layout";
import Header from "../../modules/Header/Header";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Landing({ children }: Props) {
  return (
    <Box>
      <Head>
        <title>MoodWiser</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:description"
          content="MoodWiser is a simple, useful and fun habit tracker that keeps you and your friends accountable for each other by giving priases y'all deserve to reach your goal!"
        />
        <meta
          property="og:image"
          content={
            "/moodwiser.png"
          }
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Container maxW="container.lg">
        <Header />
      </Container>
      {children}
    </Box>
  );
}
