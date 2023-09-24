import logo from "./logo.svg";
import "./App.css";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import styles from "./App.module.scss";
import karasev from "./img/karasev.webp";

function App() {
  return (
    <div className={styles.musa}>
      <div className={styles.omedin}>
        <div className={styles.vozderzhencev}>
          <div className={styles.polinochka_zamuznyaya}>
            <div className={styles.position}>
              <div className={styles.title}>
                <h1>
                  {/* Hello, guys! I am from Moscow! <br />
                  I am a mathematical professor! <br />
                  How do you do today? */}
                  My first map application!
                </h1>
              </div>
              <YMaps className={styles.incelebatov}>
                <Map
                  width="100%"
                  height="500px"
                  border-radius="30%"
                  className={styles.bocharnikova}
                  defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                />
              </YMaps>
            </div>
          </div>
          {/* <div className={styles.karasev}>
            <img width="700px" height="500px" src={karasev} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
