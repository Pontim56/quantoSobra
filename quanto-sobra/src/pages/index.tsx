import Direita from "@/components/direita/Direita";
import Esquerda from "@/components/esquerda/Esquerda";
import Image from "next/image";
import Link from "next/link";

interface YouTubeEmbedProps {
  embedId: string;
}

export default function index() {
  return (
    <div className="bg-FUNDO w-screen h-screen flex" >
      <Esquerda></Esquerda>
      <Direita></Direita>
    </div>
  )
}