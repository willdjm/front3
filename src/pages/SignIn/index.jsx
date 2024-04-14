import {useState} from 'react';

import {Link} from 'react-router-dom';

import {useAuth} from '../../hooks/auth';


export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();

    function handleSignIn(){
        if(!email, !password){
            alert("Campo vazio!")
        }else{
            signIn({email, password});
        }
    }

    return(
        <div className='flex items-center justify-center h-screen'>
            <div className='flex items-stretch'>
            <div className='flex flex-col justify-center items-center text-center p-0 px-32'>
            <div className='flex flex-col'>
                    <div className='flex items-center justify-center gap-2 mb-10'>
                    <img src="./logo-nido-imovel.png" alt="Logo Nido Imóvel" className='h-28' />
                    <div className='flex flex-col'>
                    <h1 className='text-5xl text-blue-400'>NIDOImóvel</h1>
                    <h2 className='text-sm text-blue-400 text-left'>Base de Conhecimento Interna</h2>
                    </div>
                    </div>
                </div>

                <div className='w-full p-1 gap-5 flex flex-col items-center justify-center rounded-md mb-2'>

                    <input type="text" className='text-slate-500 h-14 min-w-full p-3 rounded-md' placeholder='E-mail' onChange={e => setEmail(e.target.value)} />

                    <input type="password" className='text-slate-500 h-14 min-w-full p-3 rounded-md' placeholder='Senha' onChange={e => setPassword(e.target.value)} />
                    

                </div>

                <button title="Entrar" type='button' className='w-full bg-blue-400 text-white h-14 border-none py-0 px-4 mt-4 rounded-lg font-medium' onClick={handleSignIn}>
                    Entrar
                </button>

                <Link to="/register" className='text-blue-400 mt-14'>
                    Criar conta
                </Link>
            </div>
  
            </div>
            <div className="flex-1 h-screen hidden lg:block">
  <img src="./background.png" alt="Placeholder Image" className=" object-cover object-center h-full" />
</div>
        </div>

    );
}