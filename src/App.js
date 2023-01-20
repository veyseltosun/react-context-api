import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import TodoListContextProvider from "./context/TodoListContext";


function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">

        <AuthContextProvider>

          <ThemeContextProvider>
            <TodoListContextProvider>
             
              <Navbar />

              <TodoList />

            </TodoListContextProvider>

          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
