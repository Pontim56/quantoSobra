import Image from "next/image";

export default function Esquerda() {
    return (
        <div className="ESQUERDA w-3/5 flex flex-col justify-between pl-32">
            <div className="flex justify-end pr-10 text-lg">
                <span className="text-quanto font-arial-black">quanto</span>
                <span className="font-arial-black">sobra.</span>
            </div>
            <h1 className="text-3xl font-arial-black">Planinha | Fluxo de Caixa</h1>
            <Image alt="video" src={'/images/quadro_mine_7.png'} width={400} height={2}></Image>
            <h1 className="text-3xl font-arial-black">Sobre a planinha</h1>
            <div className="SUBTEXTO pb-4">
                <p className="font-arial-black">Organize sua empresa</p>
                <p className="font-arial-black-normal">Acompanhe o andamento de suas movimentações financeiras.</p>
                <p className="font-arial-black">Veja quais recebimentos já foram realizados</p>
                <p className="">Saiba quais contas você já recebeu</p>
                <p className="font-arial-black">Saiba as contas que você ja pagou</p>
                <p className="">Acompanhe o pagamento de suas contas</p>
            </div>
        </div>
    )
}