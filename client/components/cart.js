import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

const Cart = () => {
  return (
    <div>
      <div className="title">Your cart</div>
      <Row className="single-product-margin">
        <Col sm={3} className="product-center">
          <img
            className="products-image-size"
            src="we need to grab the image from the store and map thru it"
          />
        </Col>
        <Col sm={3} className="product-title">
          <h1>'we need to map through our store and map thru it'</h1>
        </Col>
        <Col sm={3} className="price">
          <h1>'we need to map through our store and map thru it'</h1>
        </Col>
        <Col sm={3} className="x">
          <Button>X</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Cart

//                     {
//                         students.map(student => (
//                         <div key={student.id}>
//                         <button type="button" onClick={() => this.props.removePerson(student)}>X</button>
//                         <Link to={`/students/${student.id}`} >
//                         <tr>
//                         <td>{student.firstName}</td>
//                         <td>{student.lastName}</td>
//                         </tr>
//                         </Link>
//                         </div>
//                         ))
//                     }
//                 </tbody>
//             </table>
//             <NewStudentForm />
//             </div>
//         )
//     }
// }

// const mapState = (state) => {
//   return {
//       allstudents: state.allstudents
//   }
// }
// const mapDispatch = (dispatch) => {
//   return {
//       gotStudents: () => dispatch(gotStudents()),
//       removePerson: student => dispatch(removePerson(student))
//   }
// }
// export default connect(mapState, mapDispatch)(Cart)
