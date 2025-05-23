import "./Page.css";
import black from './assets/black.png';
import pfp1 from './assets/pfp1.jpg';
import pfp2 from './assets/pfp2.jpg';
import pfp3 from './assets/pfp3.jpg';
import next from './assets/next.png';

const Page = () => {
  return (
    <main className="page">
      <header className="headerPage">
        <div className="logo">NFT Bazar</div>
        <div>
          <ul>
            <li>Marketplace</li>
            <li>Categories</li>
            <li>Collectibles</li>
            <li>Mining</li>
          </ul>
        </div>
        <div className="btns">
          <button className="btn">Sign up</button>
          <button className="btn">Login</button>
        </div>
      </header>

      <div className="con-main">

      <div className="con-image">
      <h1 className="text-bt">Collectible</h1>
      <img className="image-black" src={require(black)} alt="img" />
      </div>

      <div className="side-details">
      <h1 className="text-det">
        Discover, <br />
        collect, <br />
        and sell <span>NFTs</span>
      </h1>
      <p className="text2-det">
        World's fast growing NFTs bazar based <br />
        on NFT collectibles
      </p>
      <button className="btn-det">View collectibles <img className="angle" src={require(next)}/></button>
      </div>

      <div className="more-details">
        <div className="items-det">

        <div className="pfp-card-det">
        <div className="pfp-car-det">
              <img className="pfp" src={require(pfp1)} alt="pfp" />
              <img className="pfp" src={require(pfp2)} alt="pfp" />
              <img className="pfp" src={require(pfp3)} alt="pfp" />
        </div>
        </div>

          <div className="card-det">
            <div className="title-car-det">
              <h2>Black Panther</h2>
            </div>
            <div className="min-car-det">
              <p>Current Bid</p>
              <h4>1.018 <span className="spa-car-det">($2.396.08)</span> </h4>
            </div>
            <div className="btns-car-det">
            <button className="btn-car-det">Place a bild</button>
            <button className="btn-car-det">Share</button>
            </div>
          </div>
        </div>
      </div>

      </div>

    </main>
  )
}
export default Page;