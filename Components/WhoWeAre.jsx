import "../Styles/whoweare.css";
import Family2 from "../Assets/Videos/family2.mp4";

function Home() {
  return (
    <div class="grid-view-parent-container">
      <div class="grid-view-container">
        <div class="grid">
          <div class="Capital-Cares"><p>We’ll care for your wealth as if it were our own.</p></div>
          <div class="Numbers">
            <p>94 Years</p>
          </div>

          <div class="MENU">
            <div class="player-wrapper">
              <video loop autoPlay>
                <source src={Family2} type="video/mp4" />
              </video>
              <div class="video-overlay">
                <h1>Welcome to the family.</h1>
                <p>We’ll care for your wealth as if it were our own.</p>
              </div>
            </div>
          </div>

          <div class="Media">
            <p>Media</p>
          </div>

          <div class="News">
            <p>NEWS</p>
          </div>

          <div class="Markets">
            <p>Markets</p>
          </div>

          <div class="Trends">
            <p>Midyear Outlook</p>
          </div>

          <div class="Legacy">
            <p>Family</p>
          </div>

          <div class="Clients">
            <p>Collaboration</p>
          </div>

          <div class="PeopleMatter">
            <p>People</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
