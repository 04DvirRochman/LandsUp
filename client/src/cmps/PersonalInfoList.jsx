import PersonalInfo from "./PersonalDetails";

function PersonalInfoList(props) {
  return (
    <div className="container">
      <div className="row">
        {props.info.map((person, index) => {
          return (
            <div className="col"  key={index} >
              <PersonalInfo info={person} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default PersonalInfoList