function Main() {
  return (
    // container of main page.
    <div className="main-page">
      <main>
        {/* An <h1> and <p> tag with a className="tokenize" */}
        <div className="tokenize">
          <h1>
            Tokenize
            <img
              src="images/house-hand-with-coin-real-estate-investment-concept.png"
              alt="House Hand With Coin Real Estate Investment Concept"
            />
            Your Future <img src="images/image-4-1.png" alt="" /> Invest Smarter{" "}
          </h1>
          <p>
            Take advantage of fractional ownership and join the growing
            community of digital real estate investors.
          </p>
        </div>
        {/* end of  An <h1> and <p> tag with a className="tokenize" */}

        {/* click button of start investing */}
        <div className="invest">
          <button id="start-invest">Start Investing</button>
        </div>
        {/*end of click button of start investing */}
      </main>
    </div>
  );
}

export default Main;
