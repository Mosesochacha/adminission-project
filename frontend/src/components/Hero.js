import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
{/*https://images.unsplash.com/photo-1613896527026-f195d5c818ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1347&q=60 */}
      <div className={props.cName}>
        <img alt="heroImg" src={props.heroImg} />
      </div>

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href ={props.url} className={props.btnClass}>{props.buttonText}</a>
      </div>
    </>
  );
}

export default Hero;
