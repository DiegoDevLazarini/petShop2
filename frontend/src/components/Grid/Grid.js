import React from "react";
import axios from "axios";
import * as C from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import './styles'



const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th>Seu nome</C.Th>
          <C.Th>Nome do pet</C.Th>
          <C.Th onlyWeb>Brinquedo</C.Th>
          <C.Th></C.Th>
          <C.Th></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {users.map((item, i) => (
          <C.Tr key={i}>
            <C.Td width="30%">{item.nome}</C.Td>
            <C.Td width="30%">{item.email}</C.Td>
            <C.Td width="20%" onlyWeb>
              {item.fone}
            </C.Td>
            <C.Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </C.Td>
            <C.Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </C.Td>
          </C.Tr>
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;