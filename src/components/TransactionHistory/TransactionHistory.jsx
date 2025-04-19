import css from "./TransactionHistory.module.css"


const TransactionHistory=({items})=>{
  // console.log(items);
  
    return(
      
        <table className={css.table}>
  <thead className={css.tableHeader}>
    <tr className={css.headerRow}>
      <th className={css.rowHeaderType}>type</th>
      <th className={css.rowHeaderAmount}>amount</th>
      <th className={css.rowHeaderCurrency}>currency</th>
    </tr>
  </thead>


   <tbody>
    
{items.map((item)=>(
    <tr key = {item.id} className={css.transactionRaw}>
  
           <td className={css.transactionTypeData}>{item.type}</td>
          <td className={css.transactionAmountData}>{item.amount}</td>
           <td className={css.transactionCurrencyData}>{item.currency}</td>
    </tr> )

    )}
  </tbody>
    </table>
)}

export default TransactionHistory

