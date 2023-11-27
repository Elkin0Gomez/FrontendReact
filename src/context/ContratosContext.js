import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createContratoRequest,
  getContratosRequest,
  deleteContratosRequest,
  getContratoRequest,
  updateContratosRequest,
  generarDocumentoRequest

} from "../connections/helpers/contratos.endpoints";

const ContratosContext = createContext();

export const useContratos = () => {
  const context = useContext(ContratosContext);

  if (!context) {
    throw new Error("useAuth debe usarse con un AuthProvider");
  }
  return context;
};

export function ContratosProvider({ children }) {
  const [contratos, setContratos] = useState();

  const getContratos = async () => {
    try {
      const res = await getContratosRequest();
      const contratosArray = Array.isArray(res.data) ? res.data : [];
      setContratos(contratosArray);
    } catch (error) {
      console.error("Error al obtener contratos:", error);
    }
  };  

  const createContratos = async (contrato) => {
    console.log("contrato");
    const res = await createContratoRequest(contrato);
    console.log(res);
  };

  const deleteContrato = async (id) => {
    try {
      const res = await deleteContratosRequest(id);
      if (res.status === "ok")
        setContratos(contratos.filter((contrato) => contrato._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getContrato = async (id) => {
    try {
      const res = await getContratoRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateContrato = async (id, contrato) =>{
    try {
      const res = await updateContratosRequest(id, contrato)
      if (res.status === "ok")
      setContratos(contratos.filter((contrato) => contrato._id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  const generarDocumento = async (id) => {
    try {
      const res = await generarDocumentoRequest(id);
  
      if (res.status === "ok") {

        setContratos(contratos.filter((contrato) => contrato._id !== id));
  
      } else {
        toast.success('Documento descargado correctamente', {
          position: 'bottom-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Error al descargar el documento', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  

  return (
    <ContratosContext.Provider
      value={{
        contratos,
        createContratos,
        getContratos,
        deleteContrato,
        getContrato,
        updateContrato,
        generarDocumento
      }}
    >
      {children}
    </ContratosContext.Provider>
  );
}
