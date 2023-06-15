import classes from "./Activities.module.css";
import ActivitiesItem from "./ActivitiesItem";

const Activities = () => {
  const ACTIVITIES = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/perritos-hermosos.appspot.com/o/platicas.jpg?alt=media&token=25e7982d-6c96-41d5-9554-628589cbc7ee",
      title: 'Pláticas sobre “tenencia responsable"',
      text: "En escuelas, en estancias del sector salud y comunidades del municipio.",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/perritos-hermosos.appspot.com/o/campanha.jpg?alt=media&token=73fb99f0-a898-4f6b-8f86-cc3dd74555e8",
      title: "Campañas de esterilización",
      text: "Principalmente a hembras de la cabecera y comunidades del municipio. Estas se realizan con apoyo de padrinos y voluntarios que ayudan a costearlas, también con actividades como rifas o venta de postres.",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/perritos-hermosos.appspot.com/o/croqueton.jpg?alt=media&token=05294e85-860c-4840-b8e7-ee349717fadb",
      title: "Croquetones",
      text: "Se realizan cada dos o tres meses, en estos se coloca un stand donde se recaban donaciones en especie (alimento, medicamento y material de limpieza). Todo esto en beneficio de los perros que se encuentran en el refugio y algunos que apoyamos con atención médica gratuita.",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/perritos-hermosos.appspot.com/o/bazar.jpg?alt=media&token=80491918-68e6-4ddc-a1f6-79c69c4fa255",
      title: "Bazares",
      text: "Se coloca semanalmente una venta de ropa de uso y nueva, donada por nuestros voluntarios, todo el dinero recabado es para la alimentación semanal.",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/perritos-hermosos.appspot.com/o/rifas.jpg?alt=media&token=067fd463-1ac5-4c3b-a4fe-25883505bd0a",
      title: "Rifas",
      text: "Se realizan cada tres meses y son con el apoyo de negocios, el dinero recabado se utiliza para esterilizaciones, vacunas y desparasitantes, para los perros del refugio y perros en situación de calle.",
    },
  ];

  return (
    <div className={classes.carousel}>
      <h2 className={classes.title}>Actividades que realizamos</h2>
      <ActivitiesItem activities={ACTIVITIES} />
    </div>
  );
};

export default Activities;
