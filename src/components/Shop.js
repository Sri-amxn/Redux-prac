import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actionCreators} from '../state/index'
import { bindActionCreators } from 'redux';


const Shop = () => {
  
  const balance = useSelector(state => state.amount)
  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='container'>
        <h2>Deposit/Withdraw money</h2>
        <button className="btn btn-primary mx-2" onClick= {()=>{withdrawMoney(100)}}>-</button>
        Update balance: {balance}
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
        </div>
  )
}

export default Shop