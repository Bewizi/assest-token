import "./FindYourPiece.css";

function FindYourPiece() {
  return (
    <div className="own-a-piece">
      <h4>Get Started Now and Own a Piece of Tomorrow</h4>
      <img src="images/Big-Happy-Family.png" alt="" />
      <div className="own-a-piece-list">
        <div className="own-a-piece-list-el">
          <ul>
            <li>Registration and KYC</li>
            <hr />
            <li>Explore Investment</li>
            <hr />

            <li>Dig into Details</li>
            <hr />

            <li>Purchase Tokens</li>
            <hr />

            <li>Review Legal Information</li>
            <hr />

            <li>Manage Your Portfolio</li>
          </ul>
        </div>
        <div className="own-a-piece-list-content">
          <h5>Registration and KYC</h5>
          <p>
            To get started, Click on the "Sign Up" button to create your
            account. Provide essential information, including your name, email
            address, and a secure password. Rest assured that your data is kept
            confidential with top-notch security measures. Additionally, you
            will undergo a Know Your Customer (KYC) process to ensure compliance
            with regulatory requirements. KYC helps verify the identity of
            investors and prevents potential fraudulent activities.
          </p>
          <button>Sign Up Now </button>
        </div>
      </div>
    </div>
  );
}

export default FindYourPiece;
