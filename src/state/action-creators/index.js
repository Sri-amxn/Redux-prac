export const depositMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'deposit',
            payload: ''
        })
    }
}
export const withdrawMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: ''
        })

    }
}
