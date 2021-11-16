import {Tr, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function DataTable(index, item) {
    return(
        <Tr key={index}>
               <Td>give {item.email}</Td>
               <Td>{item.first_name}</Td>
               <Td>{item.last_name}</Td>
               <Td>
               <img 
      src={item.avatar}
      alt={"avatar"+index}
      /></Td>
        </Tr>
    );
}

export default DataTable;