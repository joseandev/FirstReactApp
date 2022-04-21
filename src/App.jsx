import { useState, useEffect } from 'react';
import { Heading, Box, Flex, Text, Spacer, Tag, Button } from '@chakra-ui/react'

import * as API from './services/launches.js';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, []);

  return (
    <>
      <Heading as='h1' size='lg' m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map(launch => (
          <Box key={launch.flight_number}
            bg='gray.100'
            p={4}
            m={4}
            borderRadius='lg'>

            <Flex display='flex'>
              <Text fontSize='2xl'>
                Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
              </Text>
              <Spacer />
              <Tag fontSize='larger' p={4} colorScheme={launch.launch_success ? 'green' : 'red'}>
                {launch.launch_success ? 'Succes' : 'Failure'}
              </Tag>
            </Flex>
            <Flex>
              <Text fontSize='sm'>
                {launch.launch_date_local.split('T')[0]}
              </Text>
            </Flex>

            <Button mt={2} colorScheme='purple'>
              More Details
            </Button>
          </Box>
        ))}
      </section>
    </>
  );
}


export default App;

//chakra
//react icons
//npm install

//Node version 16.4.2
//NPM version 8.5.0
//NVM version 1.19
//React version 17.0.2
