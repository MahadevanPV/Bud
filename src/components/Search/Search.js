import './Search.css';
import { Container } from 'react-bootstrap';
import SearchDot from '../../images/searchDot.svg';
import SearchImage from '../../images/searchImage.svg';

const Search = () => {

    const items = [
        { id: 1, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
        { id: 2, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
        { id: 3, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
        { id: 4, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
        { id: 5, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
        { id: 6, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
        { id: 7, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
        { id: 8, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
        { id: 9, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
        { id: 10, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
        { id: 11, icon: SearchDot, image: SearchImage, text: 'In Painting', additionalText: 'Reimagine any part of image' },
    ];

    return (
        <Container>
            <div className="searchBorder">
                <input
                    type="text"
                    placeholder="Search Components"
                    className='inputSearch'
                />
                <ul className="searchList">
                    {items.map((item) => (
                        <li key={item.id}>
                            <img
                                src={item.icon}
                                alt="img1"
                                className="image1"
                            />                            <img
                                src={item.image}
                                alt="img"
                                className="image"
                            />
                            <span className="textClass">{item.text}</span>
                            <span className="additionalText">{item.additionalText}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>

    );
}

export default Search;