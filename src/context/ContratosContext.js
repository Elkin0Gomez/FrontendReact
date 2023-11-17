import { createContext, useContext, useState } from "react";
import {
  createContratoRequest,
  getContratosRequest,
  deleteContratosRequest,
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

  return (
    <ContratosContext.Provider
      value={{
        contratos,
        createContratos,
        getContratos,
        deleteContrato,
      }}
    >
      {children}
    </ContratosContext.Provider>
  );
}
