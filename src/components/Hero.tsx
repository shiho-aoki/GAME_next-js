import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }:{title:string} ) =>{
    <Flex justifyContent='center' alignItems='center' height='100vh'>
        <Heading foncSize='6vw'>{title}</Heading>
    </Flex>
}

Hero.defaultProps = {
    title: 'with chakra UI TypeScript',
}