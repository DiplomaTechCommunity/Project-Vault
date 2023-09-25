import "./WhyMatter.css";
import AngularBracketsIcon from "/assets/WhyMatter/Angular-Brackets-Icon.svg";
import GitHubIcon from "/assets/WhyMatter/GitHub-Icon.svg";
import OpenSourceIcon from "/assets/WhyMatter/Open-Source-Icon.svg";
import ShareIcon from "/assets/WhyMatter/Share-Icon.svg";

const WhyMatter = () => {
  return (
    <div id="matter">
      <div>
        <div className="title">
          Why does it <span className="emphasis">matter</span>?
        </div>

        <div className="subtitle">
          Show your <span className="emphasis">awesome</span> work to others
        </div>
        </div>

          <div className="grid-container">

            <div className="grid-item top-left box-purple">
              <div className="top-row">
                <div className="box-title">
                  Every Project Counts
                </div>
                <div className="box-icon">
                  <img src={GitHubIcon} alt="GitHub Icon" />
                </div>
              </div>
              <div className="box-paragraph">
                Whether you have a basic project or a complex one, you can contribute it proudly on Project Vault.
              </div>
            </div>

            <div className="grid-item top-right box-dark">
              <div className="top-row">
                <div className="box-title">
                  Open Source Journey
                </div>
                <div className="box-icon">
                  <img src={OpenSourceIcon} alt="Open-Source Icon" />
                </div>
              </div>
              <div className="box-paragraph">
                Start your open source with this amazing opportunity and contribute your first pull request here.
              </div>
            </div>

            <div className="grid-item bottom-left box-dark">
              <div className="top-row">
                <div className="box-title">
                  Need Inspiration
                </div>
                <div className="box-icon">
                  <img src={AngularBracketsIcon} alt="Angular-Brackets Icon" />
                </div>
              </div>
              <div className="box-paragraph">
                Whether you have a basic project or a complex one, you can contribute it proudly on Project Vault.
              </div>
            </div>

            <div className="grid-item box-purple">
              <div className="top-row">
                <div className="box-title">
                  Share with others
                </div>
                <div className="box-icon">
                  <img src={ShareIcon} alt="Share Icon" />
                </div>
              </div>
              <div className="box-paragraph">
                After finding such an amazing platform, don&apos;t just keep it to yourself. Share with your friends and let them be a part of it.
              </div>
            </div>

          </div>
    </div>
  );
}

export default WhyMatter;
