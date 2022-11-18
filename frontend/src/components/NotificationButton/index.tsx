import './styles.css';
import axios from 'axios';
import imgIcon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    console.log('sucesso' + response);
  });
}

export default function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={imgIcon} alt="Notificar" />
    </div>
  );
}
