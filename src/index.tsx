import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./shared/config/i18n/i18n";
import App from "./app/App";
import { StoreProvider } from './app/providers/StoreProvider'

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Контейнер root не найден. НЕ удалось вмонтировать реакт приложение"
  );
}

const root = createRoot(container);

root.render(
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
);
