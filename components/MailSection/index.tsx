import React from 'react'
import {useToast, ChakraProvider, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea, Button, Text} from "@chakra-ui/react"
import {useState} from 'react'

interface MailStateValues {
  name: string,
  email: string,
  message: string,
}

interface MailStateTouched {
  name: boolean,
  email: boolean,
}

const defMailState = {
  name: false,
  email: false
}

interface MailState {
  values: MailStateValues
  isLoading: boolean
  error: string
}

const initValues = {
  name: '',
  email: '',
  message: '',
}

const initState = {values:initValues,isLoading:false, error:""}

const Mail = () => {
  const toast = useToast()
  const [State, setState] = useState<MailState>(initState)
  const [touched, setTouched] = useState<MailStateTouched>(defMailState)
  const {values,isLoading,error} = State

  const onBlur = (target: HTMLInputElement | HTMLTextAreaElement) => setTouched((prev) => ({...prev, [target.name]: true}))

  const handleChange = (target: HTMLInputElement | HTMLTextAreaElement) => setState((prev) => {
    return {
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }
  })

  const sendContactForm = async (data:any) => fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json()
  })

  const onSubmit = async () => {
    setState((prev) => {
      return {
        ...prev,
        isLoading: true
      }
    })

    try{
      await sendContactForm(values);
      setTouched(defMailState);
      setState(initState)
      toast({
        title: "Message sent",
        description: "Thank you for contacting us!",
        status: "success",
        duration: 2000,
        position: "top",
      })
    } catch(error:any){
        setState((prev) => {
          return {
            ...prev,
            isLoading: false,
            error:error.message
          }
        })
    }
  }

  return (
    <div id="mail">
    <ChakraProvider>
      <Container id="mail" textAlign="center" maxW="550px" mt={12}>
        <Heading>Contact</Heading>
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}

        <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" errorBorderColor="red.300" value={values.email} onChange={(e) => handleChange(e.target)} onBlur={(e) => onBlur(e.target)}/>
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" errorBorderColor="red.300" value={values.name} onChange={(e) => handleChange(e.target)} onBlur={(e) => onBlur(e.target)}/>
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" rows={6} value={values.message} onChange={(e) => handleChange(e.target)}/>
        </FormControl>

        <Button variant="outline" isLoading={isLoading} colorScheme="blue" isDisabled={!values.name || !values.email} onClick={onSubmit} mb={5}>Submit</Button>

      </Container>
    </ChakraProvider>
    </div>
  )
}

export default Mail