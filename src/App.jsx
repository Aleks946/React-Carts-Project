// My Code Here

import { useState } from 'react'
import './App.css'
import './index.css'

function HandleCarts({ image, name, birthday, salery }) {
  return (
    <div className='cart'>
      <img src={image} alt="Person img" className='img' />
      <div className="colum">
        <h4 className='before'>Name : </h4>
        <h2 className='name'>{name}</h2>

        <h4 className='before'>Birthday : </h4>
        <h3 className='birthday'>{birthday}</h3>

        <h4 className='before'>Salary : </h4>
        <h3 className='salery'>{salery}</h3>
      </div>
    </div>
  )
}


function App() {

  const [isAdding, setIsAdding] = useState(false);

  if (isAdding) {
    return <HandleAddCart goBack={() => setIsAdding(false)} />;
  }


  return (
    <div className="carts-contaner">
      <nav>
        <h1 className='title'>Employee Carts</h1>
        <button className='addCart' onClick={() => setIsAdding(true)}>Add Cart</button>
      </nav>

      <HandleCarts image='https://media.istockphoto.com/id/1348209421/photo/smiling-business-woman-working-with-laptop-while-looking-at-camera-in-modern-startup-office.jpg?s=612x612&w=0&k=20&c=-YOjhdxdWLjflmpzPyUjtYL80zhbJYqSANk6hhDPXL0='
        name='Sarah Johnson'
        birthday='January 1, 1990'
        salery='$75,000'
      />

      <HandleCarts image='https://preview.redd.it/what-are-some-tips-to-get-better-at-john-doe-v0-2h5pmnmiscue1.png?auto=webp&s=faa37460a7103611b285c1d285f02b07e48d180a'
        name='John Doe'
        birthday='July 15, 1985'
        salery='$1,250,000'
      />

      <HandleCarts image='https://img.freepik.com/premium-psd/png-industrial-worker-orange-uniform-helmet-clothing-crossed-male_53876-571526.jpg'
        name='Mike Wilson'
        birthday='March 10, 1988'
        salery='$95,000'
      />
    </div>
  )
}

function HandleAddCart({ goBack }) {
  return (
    <div className='HandleAddCart'>
      <h1 className='title'>Add Employee Cart</h1>

      <div className='addCart-contaner'>

        <div className="left">

          <div className="contaner">
            <h4 className='before2'>Image</h4>
            <input type="text" placeholder='Enter image link' className='input' />
          </div>

          <div className="contaner">
            <h4 className='before2'>Name</h4>
            <input type="text" placeholder="Enter employee name" className='input' />
          </div>

        </div>

        <div className="right">

          <div className="contaner">
            <h4 className='before2'>Birthday</h4>
            <input type="date" placeholder="Enter employee birthday" className='input' />
          </div>

          <div className="contaner">
            <h4 className='before2'>Salary</h4>
            <input type="number" placeholder="Enter employee salary" className='input' />
          </div>

        </div>

        <div className="btn">
          <button className="goBack" onClick={goBack}>Go Back</button>
          <button className='addCart'>Add Cart</button>
        </div>
      </div>
    </div>
  )
}

export default App





// // AI Code Here

// import { useState } from 'react'
// import './App.css'
// import './index.css'

// // --- COMPONENT: HandleCarts ---
// function HandleCarts({ image, name, birthday, salary, onRemove }) {
//   // Styles for the Remove button defined directly in the JSX
//   const removeBtnStyle = {
//     marginTop: '15px',
//     padding: '10px 20px',
//     backgroundColor: '#ff4d4d',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     fontSize: '14px',
//     alignSelf: 'flex-start',
//     transition: '0.2s ease'
//   };

//   return (
//     <div className='cart'>
//       <img src={image} alt="Person img" className='img' />
//       <div className="colum">
//         <h4 className='before'>Name : </h4>
//         <h2 className='name'>{name}</h2>

//         <h4 className='before'>Birthday : </h4>
//         <h3 className='birthday'>{birthday}</h3>

//         <h4 className='before'>Salary : </h4>
//         <h3 className='salery'>{salary}</h3>

//         <button
//           style={removeBtnStyle}
//           onClick={onRemove}
//           onMouseOver={(e) => e.target.style.backgroundColor = '#cc0000'}
//           onMouseOut={(e) => e.target.style.backgroundColor = '#ff4d4d'}
//         >
//           Remove Employee
//         </button>
//       </div>
//     </div>
//   )
// }

// // --- COMPONENT: App ---
// function App() {
//   const [isAdding, setIsAdding] = useState(false);

//   // Initial list of employees in an array to allow infinite additions
//   const [employees, setEmployees] = useState([
//     {
//       id: 1,
//       image: 'https://media.istockphoto.com/id/1348209421/photo/smiling-business-woman-working-with-laptop-while-looking-at-camera-in-modern-startup-office.jpg?s=612x612&w=0&k=20&c=-YOjhdxdWLjflmpzPyUjtYL80zhbJYqSANk6hhDPXL0=',
//       name: 'Sarah Johnson',
//       birthday: 'January 1, 1990',
//       salary: '$75,000'
//     },
//     {
//       id: 2,
//       image: 'https://preview.redd.it/what-are-some-tips-to-get-better-at-john-doe-v0-2h5pmnmiscue1.png?auto=webp&s=faa37460a7103611b285c1d285f02b07e48d180a',
//       name: 'John Doe',
//       birthday: 'July 15, 1985',
//       salary: '$1,250,000'
//     },
//     {
//       id: 3,
//       image: 'https://img.freepik.com/premium-psd/png-industrial-worker-orange-uniform-helmet-clothing-crossed-male_53876-571526.jpg',
//       name: 'Mike Wilson',
//       birthday: 'March 10, 1988',
//       salary: '$95,000'
//     }
//   ]);

//   // Logic to add a new employee object to the array
//   const handleAddEmployee = (newPerson) => {
//     const personWithId = { ...newPerson, id: Date.now() }; // Assign unique ID
//     setEmployees([...employees, personWithId]);
//     setIsAdding(false);
//   };

//   // Logic to remove an employee by filtering the array
//   const handleRemoveEmployee = (id) => {
//     setEmployees(employees.filter(emp => emp.id !== id));
//   };

//   if (isAdding) {
//     return (
//       <HandleAddCart
//         goBack={() => setIsAdding(false)}
//         onAdd={handleAddEmployee}
//       />
//     );
//   }

//   return (
//     <div className="carts-contaner">
//       <nav>
//         <h1 className='title'>Employee Carts</h1>
//         <button className='addCart' onClick={() => setIsAdding(true)}>Add Cart</button>
//       </nav>

//       {/* Renders every employee in the array */}
//       {employees.map((emp) => (
//         <HandleCarts
//           key={emp.id}
//           image={emp.image}
//           name={emp.name}
//           birthday={emp.birthday}
//           salary={emp.salary}
//           onRemove={() => handleRemoveEmployee(emp.id)}
//         />
//       ))}
//     </div>
//   )
// }

// // --- COMPONENT: HandleAddCart ---
// function HandleAddCart({ goBack, onAdd }) {
//   const [formData, setFormData] = useState({
//     image: '',
//     name: '',
//     birthday: '',
//     salary: ''
//   });

//   const handleSubmit = () => {
//     // Basic validation to ensure inputs aren't empty
//     if (formData.name && formData.image) {
//       onAdd(formData);
//     } else {
//       alert("Please fill in the details!");
//     }
//   };

//   return (
//     <div className='HandleAddCart'>
//       <h1 className='title'>Add Employee Cart</h1>

//       <div className='addCart-contaner'>
//         <div className="left">
//           <div className="contaner">
//             <h4 className='before'>Image</h4>
//             <input 
//               type="text" 
//               placeholder='Enter image link' 
//               className='input'
//               onChange={(e) => setFormData({...formData, image: e.target.value})} 
//             />
//           </div>

//           <div className="contaner">
//             <h4 className='before'>Name</h4>
//             <input 
//               type="text" 
//               placeholder="Enter employee name" 
//               className='input'
//               onChange={(e) => setFormData({...formData, name: e.target.value})} 
//             />
//           </div>
//         </div>

//         <div className="right">
//           <div className="contaner">
//             <h4 className='before'>Birthday</h4>
//             <input 
//               type="date" 
//               placeholder="Enter employee birthday" 
//               className='input'
//               onChange={(e) => setFormData({...formData, birthday: e.target.value})} 
//             />
//           </div>

//           <div className="contaner">
//             <h4 className='before'>Salary</h4>
//             <input 
//               type="number" 
//               placeholder="Enter employee salary" 
//               className='input'
//               onChange={(e) => setFormData({...formData, salary: e.target.value})} 
//             />
//           </div>
//         </div>

//         <div className="btn">
//           <button className="goBack" onClick={goBack}>Go Back</button>
//           <button className='addCart' onClick={handleSubmit}>Add Cart</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App