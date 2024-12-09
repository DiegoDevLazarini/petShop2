// import { useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
// import useAuth from "../../hooks/useAuth";
import Header from '../../components/Header/header.js'
import * as C from "./styles";
import Form from "../../components/Form/Form.js";
import Grid from "../../components/Grid/Grid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import './styles.js'

const Home = () => {
  // const { signout } = useAuth();
  // const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <div>

      <Header />
      <C.Container>
        {/* <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
          Sair
        </Button> */}
        <C.h1>USUÁRIOS</C.h1>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </C.Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

    </div>
  );
};

export default Home;
