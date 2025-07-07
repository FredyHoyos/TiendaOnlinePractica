import React, {useEffect, useState} from 'react'
import { getUsers } from '@/utils/api'
import UserDataTable from '@/components/Organisims/DataTable';


const Index = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(()=> {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsuarios(data);
    };
    fetchUsers();
  }, []);
  console.log('ususarios :>> ', usuarios);
  return (
    <div>
      <UserDataTable users={usuarios}/>
    </div>
  )
}

export default Index