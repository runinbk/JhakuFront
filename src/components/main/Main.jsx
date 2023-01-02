import "./Main.css";
import hello from "../../assets/hello.svg";
import { Link } from "react-router-dom";
//import Chart from '../chart/Chart';

const Main = () => {
  // const [click, setClick] = useState(false);
  // const closeMobileMenu = () => setClick(false);

  return (
    <main>
      <div className="main__container">
        {/* MAIN TITLE STARTS HERE */}

        <div className="main__title">
          <img src={hello} alt="" />
          <div className="main__greeting">
            <h1>
              Sistema de Informacion para gestion de Ventas, Inventario y
              Produccion
              <br /> para la Panaderia Jhaku
            </h1>
            <p>Bienvenido, este es tu tablero de administracion</p>
          </div>
        </div>
        {/* MAIN TITLE ENDS HERE */}

        {/* MAIN CARDS STARTS HERE */}
        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              {/* <p className="text-primary-p">Number of Subscribers</p> */}
              <span>
                <Link
                  to="./usuarios"
                  className="font-bold text-title dropdown-item "
                >
                  Usuarios
                </Link>
              </span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              {/* <p className="text-primary-p">Times of Watching</p> */}
              <span>
                <Link
                  to="./producto"
                  className="font-bold text-title dropdown-item "
                >
                  Ventas
                </Link>
              </span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className="card_inner">
              {/* <p className="text-primary-p">Number of Videos</p> */}
              <span>
                <Link
                  to="./matprima"
                  className="font-bold text-title dropdown-item "
                >
                  Inventarios
                </Link>
              </span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-green"></i>
            <div className="card_inner">
              {/* <p className="text-primary-p">Number of Likes</p> */}
              <span>
                <Link
                  to="./procesos"
                  className="font-bold text-title dropdown-item "
                >
                  Procesos
                </Link>
              </span>
            </div>
          </div>
        </div>
        {/* MAIN CARDS ENDS HERE */}

        {/* CHARTS STARTS HERE */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Procesos Diarios</h1>
                <p>Reportes de Activiades del sistema en este dia</p>
              </div>
              <i className="fas fa-euro-sign"></i>
            </div>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Consultas en el dia</h1>
                <p>Consultas de Activiades del sistema en este dia</p>
              </div>
              <i className="fas fa-euro-sign"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Usuarios</h1>
                <p>0</p>
              </div>

              <div className="card2">
                <h1>Ventas</h1>
                <p>6</p>
              </div>

              <div className="card3">
                <h1>Inventarios</h1>
                <p>0</p>
              </div>

              <div className="card4">
                <h1>Procesos</h1>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
        {/* CHARTS ENDS HERE */}
      </div>
    </main>
  );
};

export default Main;
