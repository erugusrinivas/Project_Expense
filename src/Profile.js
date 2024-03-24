const Profile =(e)=>{
    console.log(e);
    return(
        <div>
        <h1>Profile</h1>
        <p>this is profile page.you can put whatever you want</p>
        <div>mr.{e.info.username}</div>
        </div>
    )
}
export default Profile;