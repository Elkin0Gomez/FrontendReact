import { createContext, useContext, useState } from "react";
import {
  createContratoRequest,
  getContratosRequest,
  deleteContratosRequest,
  getContratoRequest,
  updateContratosRequest,

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
      setContratos(res.data);
    } catch (error) {
      console.log(error);
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
      if (res.status === 204)
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

  return (
    <ContratosContext.Provider
      value={{
        contratos,
        createContratos,
        getContratos,
        deleteContrato,
        getContrato,
        updateContrato
      }}
    >
      {children}
    </ContratosContext.Provider>
  );
}
