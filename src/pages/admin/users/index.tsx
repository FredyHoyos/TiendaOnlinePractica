import React, {useEffect, useState} from 'react'
import { getUsers } from '@/utils/api'

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
    <div>Index</div>
  )
}

export default Index