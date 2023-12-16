import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Privider - это компонент, который оборачивает все приложение
  // и принимае в качестве пропсы ранее созданный store
  // все компоненты в приложении могут иметь доступ к глобальному стору
  // все компоненты могут диспачить экшин (запрашивать изменения)
  // и имеет доступ к изменениям, которые произошли
    <Provider store={store}>
      <App />
    </Provider>
)
