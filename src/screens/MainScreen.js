import React, { Component } from 'react';
import DataService from '../helpers/services/DataService';
import DataTable from '../components/DataTable';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class MainScreen extends Component {
    constructor(props)
    {
      super(props);
      
      this.state = {
        datas: {},
        isLoading: true
      }
    }

    async componentDidMount(){
      const data = await DataService(2);
      this.setState({isLoading: false, datas: data});
    }

    renderTableData(){
       return this.state.datas.data.map((item,index) => 
        DataTable(index, item)
       );
    }

    render() {
      const {isLoading} = this.state;

      return (
        <div>
        <h1>List User</h1>
        
    { isLoading?
    <p>Loading...</p>
      :
      <Table>
        <Tbody>
      <Tr>
      <Th>Email</Th>
      <Th>First Name</Th>
      <Th>Last Name</Th>
      <Th>Avatar</Th>
      </Tr>
            {this.renderTableData()}
                </Tbody>
        </Table>
          }
          </div>
      );
        }
  }

export default MainScreen;