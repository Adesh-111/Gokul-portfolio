import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      name: "Certified Penetration Tester",
      company: "Red Team Hacker Academy",
    },
    {
      name: "Google Cybersecurity Professional",
      company: "Google",
    },
    {
      name: "Security Operations and Defense Analyst",
      company: "Splunk",
    },
    {
      name: "Network Defense Essentials (NDE)",
      company: "EC Council",
    },
  ];

  return (
    <>
      <div className="certifications-container" data-aos="fade-left" >
        <div className="certifications">
          <h3>Certifications</h3>
          {certifications.map((certification, index) => (
            <ul key={index}>
              <li>
                <p>
                  {certification.name} - <span>{certification.company}</span>
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Certifications;
