import "./WhyMatter.css";

const WhyMatter = () => {
  return (
    <div>
      <div className="body">
        <div className="title">
          Why does it <span className="emphasis">matter</span>?
        </div>

        <div className="subtitle">
          Show your <span className="emphasis">awesome</span> work to others
        </div>

        <div className="grid-align">
          <div className="grid-container">

            <div className="grid-item top-left box-purple">
              <div className="top-row">
                <div className="box-title">
                  Every Project Counts
                </div>
                <div className="box-icon">
                  <img src="./src/components/Why-Matter/assets/GitHub-Icon.svg" alt="GitHub Icon" />
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
                  <img src="./src/components/Why-Matter/assets/Open-Source-Icon.svg" alt="Open-Source Icon" />
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
                  <img src="./src/components/Why-Matter/assets/Angular-Brackets-Icon.svg" alt="Angular-Brackets Icon" />
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
                  <img src="./src/components/Why-Matter/assets/Share-Icon.svg" alt="Share Icon" />
                </div>
              </div>
              <div className="box-paragraph">
                After finding such an amazing platform, don&apos;t just keep it to yourself. Share with your friends and let them be a part of it.
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyMatter;