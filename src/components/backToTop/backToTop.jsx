function BackToTop() {
  return (
    <div
      className="back-to-top"
      onClick={() => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      }}
    >
      Back to Top
    </div>
  );
}

export default BackToTop;
