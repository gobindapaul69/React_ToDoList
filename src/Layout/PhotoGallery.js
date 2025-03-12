import Photos from '../assets/Gallery1.jpeg';

export function PhotoGallery(props) {

    //OBJECT DESTRUCTURING -> ON THELEFT HAND SIDE WE HAVE TO MENTIONED THE EXACT OBJECT PROPERTY //NAME

    const {tilte, description} = props.gallery;

    return (
        <>
            <div className="card mt-2 ms-2 d-inline-block" style={{width: '25rem'}}>
                   
                <div className="card-body">
                    <h5 className="card-title">{tilte}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                </div>
            </div>
            
        </>
    );
}