import './CandidateMoreInfo.css';
import MainButton from './MainButton';
import Articles from './Articles';

function CandidateMoreInfo(props) {
    // const candidateInfo = props.candidateInfo;

    return (
        <div>
            {/* <div className='company-name'>
                {candidateInfo.companyName}
            </div>
            <img className='candidate-img' alt='candidate' src={candidateInfo.imgSrc} />
            <div className='candidate-name'>
                {candidateInfo.name}
            </div> */}
            <MainButton tolink='/' width='' height='' text='יש לך מידע? לחצ/י כאן' />
            <Articles articles={articles} />
        </div>
    );
}

export default CandidateMoreInfo;

const articles = [
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    }
];