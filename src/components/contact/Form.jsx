import React, { useState } from 'react';
import { API } from 'aws-amplify';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  Container,
  SimpleGrid,
  useColorModeValue,
  Stack,
  Heading,
  Image,
  useToast,
} from '@chakra-ui/react';
import { createContact } from '../../graphql/mutations';
import './css/form.css'


const status = [ 'success', 'error' ]
const initialState = { name: '', email: '', message: '' };


function Form() {

  const onSubmit = (data) => {
    console.log(data);
  }

  const [ form, setForm ] = useState(initialState);
  const [ input, setInput ] = useState('')
  const toast = useToast()


  const onChange = (event, key) => {
    setForm({
      ...form,
      [ key ]: event.target.value
    })
  }

  const submit = async () => {
    const { name, email, message } = form;

    if (!name || !email) {
      console.log('error')
      return false
    }
    else if (/^ [ a - zA - Z0 - 9.!#$ %& '*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/i.test(email)) {
      // else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    }


    const result = await API.graphql({
      query: createContact,
      variables: {
        input: {
          name: form.name,
          email: form.email,
          message: form.message
        },
      }
    })
    setForm(currentState => ({ ...currentState, saving: false }));

    if (!result.errors) {
      setForm(initialState);
    }
  }


  const handleInputChange = (e) => setInput(e.target.value)
  const isError = input === ''

  return (
    <Box position={ 'relative' } px={ { base: 2, sm: 10, lg: 20 } } mt='4'>
      <Container
        as={ SimpleGrid }
        maxW={ '3xl' }
        columns={ { base: 1, md: 2 } }
        spacing={ { base: 4, lg: 32 } }
        py={ { base: 10, sm: 12, lg: 20 } }>
        <Stack spacing={ { base: 5, md: 10 } } zIndex='2' alignItems='center' justifyContent='center'>
          <Heading
            mt='4'
            color={ useColorModeValue('#8ea1a1', '#aedede') }
            lineHeight={ 1.1 }
            fontSize={ { base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' } }>
            Lets Get in Touch
          </Heading>
          <Box id="cursive-contact">
            <Image px='4' src={ 'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/olt%20photos%2Ftypography%2Fcontactme-cursive.png?alt=media&token=fb121600-e11c-4033-a014-db7a9a18a903' } />
          </Box>
        </Stack>
        <Stack
          bg={ useColorModeValue('white', 'gray.500') }
          rounded={ 'xl' }
          p={ { base: 4, sm: 6, md: 8 } }
          spacing={ { base: 8 } }
          maxW={ { lg: 'lg' } }>

          <Stack spacing={ 4 }>
            <Heading
              color={ 'gray.800' }
              lineHeight={ 1.1 }
              fontSize={ { base: '2xl', sm: '3xl', md: '4xl' } }>
            </Heading>

          </Stack>
          <Box as={ 'form' } mt={ 10 }
          >
            <Stack spacing={ 6 }
            >
              <FormControl id="name" isRequired>
                <Input
                  variant='flushed'
                  borderRadius='0'
                  placeholder="Name"
                  value={ form.name }
                  onChange={ (e) => onChange(e, 'name') }
                  color={ useColorModeValue('gray.800', 'white') }
                  _placeholder={ {
                    color: 'gray.300',
                  } }
                />
              </FormControl>
              <FormControl id="email" isRequired>

                <Input
                  variant='flushed'
                  placeholder="Email"
                  value={ form.email }
                  onChange={ (e) => onChange(e, 'email') }
                  color={ useColorModeValue('gray.700', 'white') }
                // _placeholder={ {
                //     color: 'gray.500',
                // } }
                />
              </FormControl>
              <Textarea
                mt='1em'
                placeholder=""
                borderRadius='0'
                placeholder="Message"
                value={ form.message }
                onChange={ (e) => onChange(e, 'message') }
                color={ useColorModeValue('gray.700', 'white') }

              // color={ 'gray.500' }
              // _placeholder={ {
              //     color: 'gray.500',
              // } }
              />

            </Stack>
            <Button
              variant='outline'
              fontFamily={ 'heading' }
              mt={ 8 }
              borderRadius='0'
              w={ 'full' }
              color={ 'white' }
              bg={ useColorModeValue('#a2b5b5', '#99b9b97d') }

              _hover={ {
                bg: '#8ea1a1'
              } } onClick={ () => [ submit(),
              ] }>Send</Button>

          </Box>
        </Stack>
      </Container>

    </Box>


  )
}

export default Form
