import "./Communities.css";

function Communities() {
  return (
    <>
      <div className="communities-container" data-aos="fade-left">
        <div className="communities">
          <h2 className="communities-title">Communities Involvements</h2>
          <div className="communities-images">
            <img
              src="data:image/jpeg;base64,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"
              alt="nul"
            />
            <img
              src="https://www.safebreach.com/wp-content/uploads/2023/06/Logo-DEF-CON-v2.jpg"
              alt="Defcon"
            />
            <img
              src="https://th.bing.com/th/id/OIP.GluxYRpHjs2g3bWr5nM49AHaEK?rs=1&pid=ImgDetMain"
              alt="owasp"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Communities;
