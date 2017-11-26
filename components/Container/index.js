export default (props) => (
  <div className="container">
    {props.children}
    <style global jsx>{`
      .container {
        margin: 24px;
        padding: 15px;
        border: 1px solid #f0f0f0;
        border-radius: 4px;
      }
    `}</style>
  </div>
);