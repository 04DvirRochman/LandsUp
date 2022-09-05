import PersonalInfo from "./PersonalDetails";
import Container from 'react-bootstrap/Container';

function PersonalInfoList(props) {
  return (
    <Container className="mt-5">
      <h4>we mede this website and we are goodddd we mader it with sweat and blood and ather kinds of liquids</h4>
      <div className="row d-flex justify-content-center">
        {props.info.map((person, index) => {
          return (
            <div className="col" key={index}>
              <PersonalInfo info={person} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
export default PersonalInfoList;
