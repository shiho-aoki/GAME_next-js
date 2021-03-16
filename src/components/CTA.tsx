import { Link as ChankraLink, Button } from '@chakra-ui/react';
import { Container } from './Container';

export const CTA = () =>{
    <Container 
        flexDirection='row'
        position='fixed'
        bottom='0'
        width='100%'
        maxWidth='48rem'
        py={2}
    >
        <ChankraLink  isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
            <Button width="100%" variant="outline" colorScheme="green">
                chakra UI
            </Button>
        </ChankraLink>

        <ChankraLink
            isExternal
            href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
            flexGrow={3}
            mx={2}
        >
        <Button width="100%" variant="solid" colorScheme="green">
            View Repo
        </Button>
        </ChankraLink>
    </Container>
}