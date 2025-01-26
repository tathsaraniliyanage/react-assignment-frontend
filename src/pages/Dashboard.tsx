export default function Dashboard() {
  return (
    <div className="p-6">
      <h1>Thogakade</h1>
    </div>
  )
}

// import {Customer} from "../models/Customer";
// import {useDispatch, useSelector} from "react-redux";

// export default function Dashboard() {

//     const dispatch = useDispatch();

//     const customers = useSelector((state)=>state.customer);

//     return (
//         <>
//             Dashboard
//             {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
//         </>
//     );
// }