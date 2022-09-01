function PersonalInfo(props) {
  const { text, img, name } = props.info;
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name} width="75%"  />
      <h6>{text}</h6>
    </div>
  );
}

export default PersonalInfo;
