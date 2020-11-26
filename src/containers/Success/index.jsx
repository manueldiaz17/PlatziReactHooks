import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import useGoogleAddress from '../../Hooks/useGoogleAddress';
import Map from '../../components/Map';
import './Success.css';
const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);
  return (
    <section className="Success__page">
      <div className="Success__content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="Success__page">
          <Map data={location} />
        </div>
      </div>
    </section>
  );
};

export default Success;
