
import './AvatarImg.css'

function AvatarImg({ className = '', src, alt = '' }) {
    return (
        <img className={` round ${className}`}
            src={src}
            alt={alt}
        >


<input type = "text" ></input>

        </img>
    );
}

export default AvatarImg;