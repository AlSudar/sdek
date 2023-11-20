import style from './index.module.scss';

const Form = () => {
  return (
    <div className={style.wrapper}>
      <iframe
        src='https://forms.yandex.ru/u/655b7b4c02848f163d41a83a/?iframe=1'
        frameBorder='0'
        name='ya-form-655b7b4c02848f163d41a83a'
        width='100%'
        minHeight='450px'
        style={{ padding: '20px' }}
      ></iframe>
    </div>
  );
};

export default Form;
