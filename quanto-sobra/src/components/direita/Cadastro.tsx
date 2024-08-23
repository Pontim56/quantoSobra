export default function Cadastro(){
    return(
        <div className="CADASTRO bg-cadastro h-1/2 w-1/2 flex flex-col items-center">
          <p className="font-arial-black text-sm">Receba a planilha por e-mail</p>
          <p className="text-xs">Preencha os seus</p>
          <p className="text-xs">dados para receber o material</p>
          <div className="bg-white h-1px w-90% my-2"></div>
          <form action="" className="flex flex-col ml-3">
            <p className="text-xs font-extrabold">Nome*</p>
            <input type="text" className="border-solid border-1px border-black w-90% h-5" />

            <p className="text-xs font-extrabold">E-mail*</p>
            <input type="email" className="border-solid border-1px border-black w-90% h-5" />

            <p className="text-xs font-extrabold">Você possui empresa?*</p>
            <select className="border-solid border-1px border-black w-90% h-5" >
              <option className="font-arial-black text-black" value="">Sim</option>
              <option className="font-arial-black text-black" value="">Não</option>
            </select>
            <p className="text-xs font-extrabold">Qual o setor da sua empresa?*</p>
            <select className="border-solid border-1px border-black w-90% h-5" >
              <option className="font-arial-black text-black" value="">Sim</option>
              <option className="font-arial-black text-black" value="">Não</option>
            </select>
            <p className="text-xs font-extrabold">Quantas pessoas têm na sua empresa?*</p>
            <select className="border-solid border-1px border-black w-90% h-5" >
              <option className="font-arial-black text-black" value="">Sim</option>
              <option className="font-arial-black text-black" value="">Não</option>
            </select>
            <button type="submit" value="" className="w-4/5 mt-2 h-12 bg-orange-500 font-arial-black">Receber o material</button>
          </form>
        </div>
    )
}