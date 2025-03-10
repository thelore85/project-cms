type Props = {}

export default function CardLeft({}: Props) {
  return (
    <section id="valueProposition" className="bg-background">
      <div className="container my-20">
        {/* CARD  */}
        <div className="flex justify-center bg-white border-2 mb-4 border-black p-5 rounded-3xl shadow-flat m-auto min-h-[400px]">
          <div className="md:flex justify-between items-center gap-5">
            <div className="md:w-1/2 min-h-[400px] rounded-3xl shadow-lg bg-[url('/img/components/valueProposition/platform.png')] bg-cover bg-center"></div>
            <div className="md:w-1/2 p-10 text-center">
              <h3 className="inline-block px-4 py-2 rounded-md text-black w-full mb-4 text-4xl font-bold">Gestiona tus poliza en una plataforma</h3>
              <p className="text-lg">Nuestra tecnología de subasta inversa activa una competencia entre brokers, garantizándote la mejor póliza.</p>
              <p className="text-lg"> Cuantas más ofertas recibas, mejores serán las condiciones, con total transparencia y ahorro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
