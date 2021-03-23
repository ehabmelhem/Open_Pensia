
import './Articles.css'

function Articles({articles}) {
    return (
        <div className='all-articles'>
            {!!articles && articles.map((article, index) => {
                return (
                    <div key={index} className='article'>
                        <h4 className='article-title'> {article.title} </h4>
                        <p className='sub-title'> {article.subTitle} </p>
                        <a href={article.link} target='_blank' className='link'> צפייה בכתבה </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Articles;