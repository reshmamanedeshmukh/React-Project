import HeaderComponent from "./HeaderComponent"

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div fluid style={{paddingLeft: '0px', paddingRight: '0px',marginLeft:'0px',marginRight:'0px'}}>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default Base;