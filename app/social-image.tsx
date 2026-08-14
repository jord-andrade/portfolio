export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function SocialImage() {
  return (
    <div
      style={{
        background: "#111411",
        color: "#f4f1e8",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, Helvetica, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px 72px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid rgba(244, 241, 232, 0.24)",
          borderRadius: 999,
          display: "flex",
          height: 520,
          position: "absolute",
          right: -150,
          top: 55,
          width: 520,
        }}
      />
      <div
        style={{
          border: "72px solid #b7ff00",
          borderRadius: 999,
          display: "flex",
          height: 420,
          position: "absolute",
          right: -58,
          top: 105,
          width: 420,
        }}
      />
      <div
        style={{
          display: "flex",
          fontSize: 22,
          fontWeight: 700,
          justifyContent: "space-between",
          letterSpacing: 4,
          width: "100%",
        }}
      >
        <span style={{ color: "#b7ff00" }}>01 / PORTFOLIO</span>
        <span style={{ marginRight: 300 }}>BR · 2026</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: -5,
            lineHeight: 0.88,
          }}
        >
          <span>JORDAN</span>
          <span>ANDRADE</span>
        </div>
        <div
          style={{
            color: "#b7ff00",
            display: "flex",
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: 5,
            marginTop: 34,
          }}
        >
          FULL-STACK · DATA · AI
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          borderTop: "2px solid rgba(244, 241, 232, 0.7)",
          display: "flex",
          fontSize: 22,
          fontWeight: 700,
          justifyContent: "space-between",
          letterSpacing: 3,
          paddingTop: 26,
          width: "100%",
        }}
      >
        <span>COMPLEXITY IN. CLARITY OUT.</span>
        <span style={{ color: "#b7ff00" }}>JORD-ANDRADE.DEV</span>
      </div>
    </div>
  );
}
