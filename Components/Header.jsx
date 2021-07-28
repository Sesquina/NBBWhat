import "../Styles/header.css";
import Logo from "../Assets/Images/Logo.png";

function Header({ currentSectionIndex, setCurrentSectionIndex }) {
  const sectionTitles = [
    "Who We Are",
    "What We Can Do For You",
    "Your Dedicated Team",
    "Our Investment Results"
  ];

  const filledLineLength = "9vw";

  return (
    <div>
      <div className="header-section-container">
        <img src={Logo} className="header-section-logo-img" />
        <div className="header-section-nav-bar-container">
          <div className="header-section-nav-bar-circle-container">
            {sectionTitles.map((_, i) => {
              if (i === sectionTitles.length - 1) {
                if (i === currentSectionIndex) {
                  return (
                    <div
                      className="header-section-nav-bar-circle-parent-container"
                      onClick={() => setCurrentSectionIndex(i)}
                    >
                      <div className="header-section-nav-bar-circle" />
                      <div
                        className="header-section-nav-bar-filled-circle"
                        style={{
                          opacity: i == currentSectionIndex ? "1" : "0"
                        }}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="header-section-nav-bar-circle"
                      onClick={() => setCurrentSectionIndex(i)}
                    />
                  );
                }
              } else {
                return (
                  <div className="header-section-nav-bar-item-container">
                    <div
                      className="header-section-nav-bar-circle-container"
                      onClick={() => setCurrentSectionIndex(i)}
                    >
                      <div className="header-section-nav-bar-circle"></div>
                      <div
                        className="header-section-nav-bar-filled-circle"
                        style={{
                          opacity: i <= currentSectionIndex ? "1" : "0"
                        }}
                      />
                    </div>
                    <div className="header-section-nav-bar-line-container">
                      <div className="header-section-nav-bar-line" />
                      <div
                        className="header-section-nav-bar-filled-line"
                        style={{
                          width:
                            i < currentSectionIndex ? filledLineLength : "0"
                        }}
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="header-section-nav-bar-text-container">
            {sectionTitles.map((sectionTitle, i) => (
              <div
                className="header-section-nav-bar-text"
                style={{
                  fontWeight: i === currentSectionIndex ? "bold" : "normal"
                }}
              >
                {sectionTitle}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
