/* DESIGN: Órbita de Judas — gráfica espacial vectorial, silenciosa y ligera. */
type OrbitalSceneProps = {
  activeIndex: number;
};

export default function OrbitalScene({ activeIndex }: OrbitalSceneProps) {
  return (
    <div
      className="space-scene"
      aria-hidden="true"
      style={{ "--chapter": activeIndex } as React.CSSProperties}
    >
      <div className="star-field" />
      <div className="planet-halo" />
      <div className="planet">
        <span className="planet-crater crater-a" />
        <span className="planet-crater crater-b" />
        <span className="planet-crater crater-c" />
      </div>
      <svg className="orbital-rings" viewBox="0 0 1000 700" fill="none">
        <ellipse className="ring ring-one" cx="510" cy="355" rx="458" ry="112" />
        <ellipse className="ring ring-two" cx="510" cy="355" rx="388" ry="210" />
        <ellipse className="ring ring-three" cx="510" cy="355" rx="270" ry="286" />
        <path className="signal-arc" d="M154 480C320 692 726 687 892 414" />
      </svg>
      <div className="orbital-ship">
        <span className="ship-core" />
        <span className="ship-tail" />
      </div>
      <div className="signal-scan" />
    </div>
  );
}
