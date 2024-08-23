import Link from "next/link";

export default function Importante(){
    return(
        <div className="IMPORTANTE w-1/2 flex flex-col gap-2">
          <p className="text-sm font-arial-black">Importante</p>
          <p className="text-xs">O link para você baixar o guia será enviado para o seu e-mail.<span className="font-arial-black">Isso pode levar até 30 minutos.</span></p>
          <p className="text-xs">Caso você não o receba em sua caixa de entrada,<span className="font-arial-black">cheque sua caixa de SPAM.</span></p>
          <div>
            <p className="text-xs">Para evitar que o e-mail seja enviado para sua caixa de SPAM, adicone este endereço aos seus contatos:</p>
            <p className="text-xs ">cassio.muller@quantocobra.com.br</p>
          </div>
          <div>
            <p className="text-xs">Para ver como adicionar contatos no seu e-mail:</p>
            <p className="flex gap-2 text-black text-xs">
              <Link href={'#'}>Gmail,</Link>
              <Link href={'#'}>Outlook,</Link>
              <Link href={'#'}>Yahoo.</Link>
            </p>
          </div>
        </div>
    )
}