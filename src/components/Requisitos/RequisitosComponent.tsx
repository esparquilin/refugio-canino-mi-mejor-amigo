import Requisito from "./RequisitoItem";

const Requisitos = () => {
  const REQUISITOS = [
    {
      title: "Espacio adecuado",
      text: "Asegúrate de tener el espacio adecuado para tu nuevo compañero, los      perros pueden crecer más de lo esperado. Además debe mantenerse limpio y seco.",
    },
    {
      title: "Mándanos mensaje",
      text: "Comunícate con nosotros a través de la página, te daremos más información y resolveremos dudas que tengas. Además podremos coordinar tu visita.",
    },
    {
      title: "INE",
      text: " Necesitamos una copia de tu identificación oficial y una foto del      espacio donde habitará la mascota. Adpotar es una gran responsabilidad, por lo tanto NO pueden hacer el trámite menores de edad.",
    },
    {
      title: "Formulario",
      text: "Llenaras un formulario con datos sobre el adoptante e información de      contacto, además de un documento donde se darñan a concer las obligaciones para cada perro, por ejemplo, la esterilización.",
    },
    {
      title: "Cuidado veterinario",
      text: "Cada perro debe visitar al veterinario periódicamente, incluso si no parece enfermo. Es responsabilidad de cada adoptante brindar esta atención para evitar grandes problemas",
      text2:
        "(A veces solicitamos una foto del estado del perro después de ser adoptado, regálanosla, no te cuesta nada 😁 )",
    },
  ];

  return (
    <>
      <Requisito requisitos={REQUISITOS} />
    </>
  );
};

export default Requisitos;
