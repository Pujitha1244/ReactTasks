import "./App.css";
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import SetIntervalEx from "./components/SetIntervalEx";
import { createContext } from "react";
import UseContextHook from "./components/UseContextHook";
import LoginDataContext from "./components/Context/loginDataContext";
import UseRefHook from "./components/UseRefHook";
import UseReducerHook from "./components/UseReducerHook";
import FetchData from "./components/Apps/FetchData";
import Parent from "./components/ChildToParent";
import UseMemoHook from "./components/UseMemoHook";
import UseCallbackHook from "./components/UseCallbackHook";
import CheckboxComponent from "./components/Checkbox";
import StarWarsApp from "./components/Interview/StarWarsApp";
import Pokemon from "./components/Interview/Pokemon";
import RickAndMortyApp from "./components/Interview/RickMortyApi";
import Cart from "./components/Interview/Cart";
import StarWars2 from "./components/Interview/StarWars2";
import Faq from "./components/HOC/Faq";
import Pokemon2 from "./components/Interview/Pokemon2";
import Faq2 from "./components/HOC/Faq2";
import Forms from "./components/Interview/Forms";
import ToDoApp from "./components/Apps/ToDoApp";
import ColorApp from "./components/Apps/ColorApp";
import Stopwatch from "./components/Apps/StopWatch";
import TableData from "./components/Apps/TableData";
import InfiniteScroll from "./components/Apps/InfiniteScroll";

// let userData = {
//   name: 'V.Sai Pujitha',
//   mail: 'pujitha1244@gmail.com',
//   gender: 'Female',
//   city: 'Hyderabad',
// }
// export const LogInDataContext = createContext(userData)

function App() {
  return (
    // <LogInDataContext.Provider value={userData}>
    <LoginDataContext>
      <div className="App">
        {/* <UseStateHook />
        <UseEffectHook />
        <SetIntervalEx />
        <UseContextHook />
        <UseRefHook/> */}
        {/* <UseReducerHook/>
       

        <UseMemoHook/>
        <Parent/> */}

        {/* <UseCallbackHook /> */}
        {/* <Parent/> */}
        {/* <FetchData /> */}
        {/* <CheckboxComponent /> */}
        {/* <StarWarsApp/> */}
        {/* <Pokemon /> */}
        {/* <Pokemon2 /> */}
        {/* <StarWars2 /> */}
        {/* <Cart /> */}
        {/* <RickAndMortyApp/> */}
        {/* <Faq />
        <Faq2 /> */}
        {/* <Forms /> */}
        {/* <ToDoApp /> */}
        {/* <ColorApp /> */}
        {/* <Stopwatch />
        <TableData /> */}
        {/* <Forms/> */}
        <InfiniteScroll />
      </div>
    </LoginDataContext>

    // </LogInDataContext.Provider >
  );
}

export default App;
