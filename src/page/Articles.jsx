import Footer from "../component/Footer";
import Header from "../component/Header";


function Articles() {
    
    const articles = [
      {
        title: "Iphone 15 pro",
        price: 990,
        isPublished: true,
      },
      {
        title: "TV Sony 6K Full",
        price: 1599,
        isPublished: false,
      },
      {
        title: "Playstation 5 with Rom",
        price: 479,
        isPublished: true,
      },
      
    ];
  
    return(
        <>
        <Header />

      <main>

          {articles.map((product) => {
              return(
                  <>
                      {product.isPublished ? 
                      (
                      <article>
                          <h2>{product.title}</h2>
                          <p>{product.price}</p>
                      </article>
                      ):(
                        <>
                          <h2>{product.title}</h2>
                          <p> Pas disponible </p>
                        </>
                      )}
                      
                  </>
              
          )})}
      </main>
      <Footer />
      </>
  );}

export default Articles
