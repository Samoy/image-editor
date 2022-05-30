import "./styles.css";
import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import { theme } from "./config/theme";
import { locale } from "./config/locale";

const App = () => (
  <ImageEditor
    includeUI={{
      loadImage: {
        path:"./image/genshin.png",
        name: "Genshin"
      },
      theme,
      locale,
      menu: [
        "resize",
        "crop",
        "rotate",
        "draw",
        "shape",
        "icon",
        "text",
        "filter"
      ],
      menuBarPosition: "bottom",
      uiSize:{
        width:1000,
        height:800
      }
    }}
    usageStatistics={true}
  />
);

export default App;
