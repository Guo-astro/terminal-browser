import Carousel, { type Demo } from "./components/carousel";
import { GithubMark, StarIcon } from "./components/icons";
import Install from "./components/install";
import PixelBackground from "./components/pixel-background";
import { starCount } from "./components/stars";
import Wordmark from "./components/wordmark";

export const revalidate = 3600;

const REPO = "https://github.com/zenbu-labs/terminal-browser";
const PIXEL = `${REPO}/tree/main/pixel`;
const DOCS = `${PIXEL}#documentation`;
const EXAMPLES = `${PIXEL}/examples`;

const FEATURES = [
  // fixme: placeholder copy
  "120 fps pixel perfect graphics in the terminal",
  // fixme: placeholder copy
  "Embeddable inside existing TUIs",
  // fixme: placeholder copy
  "Built in Chromium WebView component",
  // fixme: placeholder copy
  "Cross platform",
  // fixme: placeholder copy
  "Built on top of Rust with a TypeScript React API",
  // fixme: placeholder copy
  "Agent-friendly dev tools",
];

const DEMOS: Demo[] = [
  {
    label: "Browser",
    media: { kind: "video", src: "/media/browser.mp4", size: [1954, 1214] },
    // fixme: placeholder copy
    caption: (
      <>
        <a href={REPO}>terminal-browser</a> · a real browser inside your terminal
      </>
    ),
  },
  {
    label: "Vscode",
    media: { kind: "video", src: "/media/vscode.mp4", size: [1972, 1240] },
    // fixme: placeholder copy
    caption: (
      <>
        <a href="https://tode.sh">terminal-code</a> · vscode inside your terminal
      </>
    ),
  },
  {
    label: "Zed",
    media: { kind: "video", src: "/media/zed.mp4", size: [1954, 1214] },
    // fixme: placeholder copy
    caption: (
      <>
        <a href={`${EXAMPLES}/zed`}>zed</a> · the zed editor inside your terminal
      </>
    ),
  },
];

const TERMINALS = [
  "Ghostty",
  "iTerm2",
  "xterm.js",
  "Konsole",
  "WezTerm",
  "Warp",
  "noctty (Ghostty for Windows)",
  "Mobile SSH",
  "st (with a patch)",
  "wayst",
  "AbsoluteTelnet/SSH",
  "cmux",
  "tty7",
  "VS Code",
  "Cursor",
];

const USED_BY = [
  // fixme: placeholder copy
  { name: "terminal-browser", repo: "zenbu-labs/terminal-browser", description: "a real browser inside your terminal" },
  // fixme: placeholder copy
  { name: "terminal-code", repo: "zenbu-labs/terminal-code", description: "vscode inside your terminal" },
];

export default async function Home() {
  const stars = Object.fromEntries(await Promise.all(USED_BY.map(async (p) => [p.repo, await starCount(p.repo)])));

  return (
    <>
      <PixelBackground />
      <div className="col">
        <header className="site">
          <span />
          <span className="right">
            <a href={DOCS}>docs</a>
            <a href={EXAMPLES}>examples</a>
            <a className="gh-stars" href={PIXEL} title="zenbu-labs/terminal-browser/pixel">
              <GithubMark />
              <b>
                <StarIcon />
                <span>{stars["zenbu-labs/terminal-browser"]}</span>
              </b>
            </a>
          </span>
        </header>

        <div className="hero">
          <Wordmark />
          {/* fixme: placeholder copy */}
          <p className="lede">Build graphical applications in the terminal</p>
          <Install />
        </div>

        <section>
          {/* fixme: placeholder copy */}
          <h2>Demos</h2>
          <Carousel demos={DEMOS} />
        </section>

        <section>
          {/* fixme: placeholder copy */}
          <h2>Features</h2>
          <ul className="facts">
            {FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          {/* fixme: placeholder copy */}
          <h2>Supported platforms</h2>
          <ul className="facts platforms">
            <li>
              <span>macOS</span>
              <span className="detail">Apple Silicon · Intel</span>
            </li>
            <li>
              <span>Linux</span>
              <span className="detail">arm64 · x64</span>
            </li>
            <li>
              <span>Windows</span>
              <span className="wip" tabIndex={0}>
                WIP
                {/* fixme: placeholder copy */}
                <span className="tooltip" role="tooltip">
                  You can use pixel on Windows today through WSL. Native Windows support is a work in progress.
                </span>
              </span>
            </li>
          </ul>
        </section>

        <section>
          {/* fixme: placeholder copy */}
          <h2>Used by</h2>
          <div className="rows">
            {USED_BY.map((project) => (
              <a key={project.repo} href={`https://github.com/${project.repo}`}>
                <span className="n">{project.name}</span>
                <span className="d">{project.description}</span>
                <span className="m">
                  <StarIcon />
                  <span>{stars[project.repo]}</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section>
          {/* fixme: placeholder copy */}
          <h2>Supported terminals</h2>
          <ul className="terminals">
            {TERMINALS.map((terminal) => (
              <li key={terminal}>{terminal}</li>
            ))}
          </ul>
        </section>

        <footer>
          <span>MIT · zenbu labs</span>
          <span className="links">
            <a href={DOCS}>docs</a>
            <a href={EXAMPLES}>examples</a>
            <a href="https://www.npmjs.com/package/@zenbu-labs/pixel">npm</a>
            <a href="https://discord.gg/t3jzHHfc6z">discord</a>
            <a href={PIXEL}>github</a>
          </span>
        </footer>
      </div>
    </>
  );
}
