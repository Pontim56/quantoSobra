import Cadastro from "./Cadastro";
import Importante from "./Importante";

export default function Direita(){
    return(
        <div className="DIREITA w-2/5 flex justify-center gap-3 flex-col">
            <Cadastro></Cadastro>
            <Importante></Importante>
      </div>
    )
}