import Button from './Button';

const Error = ({ errorMsg, onClickCloseError }) => {
  return (
    <div className="error-wrapper">
      <div className="error-window">
        <p>{errorMsg}</p>
        <div>
          <Button type='btn-rect' text='OK' onClick={onClickCloseError} />
        </div>
      </div>
    </div>
  );
};

export default Error;
