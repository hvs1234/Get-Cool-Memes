import React , {useState , useEffect} from 'react'
import './style.css'

const Home = () => {

 const [memeDetails, setMemeDetails] = useState({
    url: '',
    title: '',
    author: '',
  });

  const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        setMemeDetails({
          url: data.url,
          title: data.title,
          author: data.author,
        });
      });
  };

  useEffect(() => {
    generateMeme();
  }, []);

  return (
    <>
      
      {/* Hero Section */}

      <section className="section section-hero">
        <div className="container">
            <div className="meme-container">
                <button className="btn meme-btn" onClick={generateMeme}>Generate Memes&nbsp; <i className="fa-regular fa-face-laugh-squint"></i></button>
                <p className="meme-title meme-para">{memeDetails.title}</p>
                <img src={memeDetails.url} alt="meme" loading='lazy'/>
                <div className="meme-author"><p className='meme-para'><i className="fa-regular fa-face-laugh-squint"></i>&nbsp; Meme By: {memeDetails.author}</p></div>
            </div>
        </div>
      </section>

    </>
  )
}

export default Home