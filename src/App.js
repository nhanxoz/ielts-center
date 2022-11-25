import logo from "./logo.svg";
import "./App.css";
import ReactTyped from "react-typed";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Home from "./Containers/Home";
import Program from "./Containers/Program";

function App() {
  return (
    <div classname="App">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-dark-grayscale">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 0.49803921568627" />
              <feFuncG type="table" tableValues="0 0.49803921568627" />
              <feFuncB type="table" tableValues="0 0.49803921568627" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-grayscale">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 1" />
              <feFuncG type="table" tableValues="0 1" />
              <feFuncB type="table" tableValues="0 1" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-purple-yellow">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.54901960784314 0.98823529411765"
              />
              <feFuncG type="table" tableValues="0 1" />
              <feFuncB
                type="table"
                tableValues="0.71764705882353 0.25490196078431"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-blue-red">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 1" />
              <feFuncG type="table" tableValues="0 0.27843137254902" />
              <feFuncB
                type="table"
                tableValues="0.5921568627451 0.27843137254902"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-midnight">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 0" />
              <feFuncG type="table" tableValues="0 0.64705882352941" />
              <feFuncB type="table" tableValues="0 1" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-magenta-yellow">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0.78039215686275 1" />
              <feFuncG type="table" tableValues="0 0.94901960784314" />
              <feFuncB
                type="table"
                tableValues="0.35294117647059 0.47058823529412"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-purple-green">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.65098039215686 0.40392156862745"
              />
              <feFuncG type="table" tableValues="0 1" />
              <feFuncB type="table" tableValues="0.44705882352941 0.4" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-blue-orange">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0.098039215686275 1" />
              <feFuncG type="table" tableValues="0 0.66274509803922" />
              <feFuncB
                type="table"
                tableValues="0.84705882352941 0.41960784313725"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <main id="page" className="site">
        <Header/>
        <Home/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
