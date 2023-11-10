import Footer from "../component/Footer";
import Header from "../component/Header";

function Home(){
    const articles = [
        {
          title: "Article 1",
          price: 10,
          isPublished: true,
        },
    
        {
          title: "Article 2",
          price: 20,
          isPublished: false,
        },
    
        {
          title: "Article 3",
          price: 30,
          isPublished: true,
        },
    
        {
          title: "Article 4",
          price: 40,
          isPublished: false,
        },
    
        {
          title: "Article 5",
          price: 50,
          isPublished: true,
        },
    
        {
          title: "Article 6",
          price: 60,
          isPublished: false,
        },
    
        {
          title: "Article 7",
          price: 70,
          isPublished: true,
        },
    
        {
          title: "Article 8",
          price: 80,
          isPublished: false,
        },
    
        {
          title: "Article 9",
          price: 90,
          isPublished: true,
        },
    
        {
          title: "Article 10",
          price: 100,
          isPublished: false,
        },
      ];

      // on assigne au tableau une fonction filtre >>(filter) et un parametre >>  (article) 
const publishedArticles =articles.filter((article) =>{
        // on retourne les elements vrais du tableau
    return article.isPublished === true;
});
   // fonction qui permet de ne garder que les 3 derniers element
const lastThreePublishedArticles = publishedArticles.slice (-3) 

// fonction de loop (map) pour aller cherher les elements souhaités du tableau

    return(
        <>
        <Header />
        <main>
            <h2>Les trois derniers articles : </h2>

            {lastThreePublishedArticles.map((article) => {
        return (
          <article className ="App">
            <h2>{article.title}</h2>
            <h3>{article.price}e</h3>
          </article>
        );
      })}
        </main>
        <Footer />
        </>
    )
}
export default Home;