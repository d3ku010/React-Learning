import ProfilePic from './assets/profile.jpg'

function Card() {

    return (
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="profile picture"></img>
            <h2 className="card-title" >Pathu</h2>
            <p className="card-text" >I am Pathumma</p>
        </div >
    );
}

export default Card