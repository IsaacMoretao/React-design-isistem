import { Envelope, Keyhole } from "phosphor-react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";

import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { FormEvent, useState } from "react";
import axios from "axios";

export function Login(){

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function hendleSignIn(event: FormEvent){
    event.preventDefault();

    await axios.post('/sessions',{
      email: 'isaachanam@gmail.com',
      passwoerd: '12345678'
    })

    setIsUserSignedIn(true)
  }

  return(

    <div className="w-scrieen h-screen bg-gray-900 flex flex-col items-center justify-center">
    <header className='flex flex-col items-center'>
      <Logo/>

      <Heading size="lg" className='mt-4'> Ignite Lab </Heading>
      <Text size="lg" className='text-gray-400 mt-1'>faça login e comece a usar!!!</Text>
    </header>

    <form onSubmit={hendleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>

      { isUserSignedIn && <Text>Login Realizado</Text> }

      <label htmlFor="email" className='flex flex-col gap-3'>
        <Text className='font-semibold'>Endereço de E-mail</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope/>
          </TextInput.Icon>
          <TextInput.Input id='email' type="email" placeholder='Digite seu email'/>
        </TextInput.Root>
      </label>

      <label htmlFor="Password" className='flex flex-col gap-3'>
        <Text className='font-semibold'>Sua senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Keyhole />
          </TextInput.Icon>
          <TextInput.Input type="password" id='Password' placeholder='*********'/>
        </TextInput.Root>
      </label>

      <label htmlFor='remember' className="flex items-center gap-2 cursor-pointer">
        <Checkbox id='remember' />
        <Text size="sm" className='text-gray-200'>Lembrar de mim por 30 dias</Text>
      </label>

      <Button type="submit" className='mt-4'>
        Entrar na plataforma
      </Button>

    </form>

    <footer className="flex flex-col items-center gap-4 mt-8">
      <Text asChild>
        <a href="" className="text-gray-500 underline hover:text-gray-200">Equeceu sua senha?</a>
      </Text>
      <Text asChild>
        <a href="" className="text-gray-500 underline hover:text-gray-200 cursor-pointer">Não possue uma conta? crie uma agora</a>
      </Text>
      


    </footer>

  </div>

  )
}