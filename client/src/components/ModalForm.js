import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast,Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalForm = () => {
      const [formData, setFormData] = useState({
        username: '',
        phoneNumber: '',
        institutionName: '',
      });
      const use = useNavigate();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const onclose = () =>{
        toast.warning('Please fill the User_Details to continue...',{
          position:toast.POSITION.TOP_CENTER,
          transition:Flip,
          theme:"dark",
          style:{width:"120%",right:"10%"}
        });
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.phoneNumber || !formData.institutionName) {
          toast.warning('Please fill in all required fields.',{
            position:toast.POSITION.TOP_CENTER,
            transition:Flip,
            theme:"dark",
          });
          return;
        }
        else if(!/^[6-9]\d{9}$/.test(formData.phoneNumber)){
          toast.warning('Pleae enter valid mobile number',{
            position:toast.POSITION.TOP_CENTER,
            transition:Flip,
            theme:"dark",
          });
          return;
        }
        else{
          handleClose()
          localStorage.setItem('raw',JSON.stringify({username:formData.username,mobile:formData.phoneNumber,institute:formData.institutionName}));
          toast.warning('Redirecting you to User_Page',{
            position:toast.POSITION.TOP_CENTER,
            transition:Flip,
            theme:"dark",
          });
          setTimeout(()=>{
            use('/user');
          },1500);
        }
      };
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      useEffect(() => {
        handleShow();
      }, []);

  return (
    <>
    <ToastContainer
		pauseOnHover={false}
		autoClose={5000}
		/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:"#313D5A"}}>
          <Modal.Title style={{color:"whitesmoke"}}>User_Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"#313D5A"}}>
          <Form onSubmit={handleSubmit} style={{backgroundColor:"#313D5A",color:"whitesmoke"}}>
            <Form.Group className="mb-3">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder='Set New_Username'
                value={formData.username}
                onChange={handleChange}
                required
                style={{backgroundColor:"#cfd4d1"}}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                placeholder='Enter Contact_Number'
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                style={{backgroundColor:"#cfd4d1"}}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Institution Name</Form.Label>
              <Form.Control
                type="text"
                name="institutionName"
                placeholder='Enter Institution_Name'
                value={formData.institutionName}
                onChange={handleChange}
                required
                style={{backgroundColor:"#cfd4d1"}}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#313D5A"}}>
          <Button variant="secondary" onClick={onclose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;