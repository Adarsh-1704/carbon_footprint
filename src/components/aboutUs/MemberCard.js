import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./style.scss";

function MemberCard(props) {
  const name = props.name;
  const email = props.email;
  const em = props.email.slice(7);
  const location = props.location;
  const photo = props.photo;
  const ln = props.ln;
  return (

    <div className="col-sm-8 offset-sm-1 col-md-10">
      <div className="profile-card card rounded-1g shadow p-4 p-x1-5 mb-4 text-center">
        <div className="banner" />
        <img src={photo} alt="" className="img-circle mx-auto mb-3" />
        <h3 className="mb-4">{name}</h3>
        <div className="text-left mb-4">
          <h6 className="mb-2">
            <i className="fa fa-envelope mr-2" />
            <MailOutlineIcon />
            {em}
          </h6>
          <h6 className="mb-2">
            <i className="fa fa-map-marker-alt mr-2" />
            <LocationOnOutlinedIcon /> {location}
          </h6>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a href={ln} className="mx-3">
            <LinkedInIcon />
          </a>
          <a href={email} className="mx-3">
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
