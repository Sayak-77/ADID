import React, { useState } from 'react'
import '../style/loginstyles.css';
import { ToastContainer, toast,Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

		const [user, setUser] = useState({
			name: "",email: "", password: ""
		});
		const [auth,setAuth] = useState({
			lemail:"", lpass:""
		});

		const [userEmail, setUserEmail] = useState('');
		const use= useNavigate();
		let name, value;
		const handleInputs = (e) =>{
			name=e.target.name;
			value=e.target.value;

			setUser({... user, [name]:value});
		}
	const handleSubmit = async (e) =>{
		e.preventDefault();
		setUser({name:'',email:'',password:''});
		const response = await fetch('http://localhost:8080/register',{
			method: 'POST',
			body:JSON.stringify(user),
			headers:{
				'Content-Type':'application/json'
			}
		})
		if(response.ok){
			const data = await response.text();
			toast.success(data,{
				position:toast.POSITION.TOP_CENTER,
				transition:Flip,
				theme:"dark",
				className:"message"
			});
		}
		else if(response.status==400){
			const data = await response.text();
			toast.warning(data,{
				position:toast.POSITION.TOP_CENTER,
				transition:Flip,
				theme:"dark"
			});
		}
		else{
			const data = await response.text();
			toast.error(data,{
				position:toast.POSITION.TOP_CENTER,
				transition:Flip,
				theme:"dark"
			});
		}
    }

const proceedLogin = async (e) =>{
	e.preventDefault();
	// setUser({name:'',email:'',password:''});
	const response = await fetch('http://localhost:8080/auth',{
		method: 'POST',
		body:JSON.stringify(auth),
		headers:{
			'Content-Type':'application/json'
		}
	})
	if(response.ok){
		const data = await response.text();
		localStorage.setItem('help',JSON.stringify({email: auth.lemail}));
		toast.success(data,{
				position:toast.POSITION.TOP_CENTER,
				transition:Flip,
				theme:"dark"
	});
	// setTimeout(()=>{
	// 	use('/myprofile');
	// },2500);
    }
	else if(response.status==400){
		const data = await response.text();
		toast.error(data,{
			position:toast.POSITION.TOP_CENTER,
			transition:Flip,
			theme:"dark"
		});
	}
	else{
		const data = await response.text();
		toast.error(data,{
			position:toast.POSITION.TOP_CENTER,
			transition:Flip,
			theme:"dark"
		});
	}
 }
 let lname,lvalue;
 const handleLogin = (e) =>{
	lname=e.target.name;
	lvalue=e.target.value;

	setAuth({... auth, [lname]:lvalue});
}

  return (
    <div className="big">
		<ToastContainer
		pauseOnHover={false}
		autoClose={5000}
		/>
    <div className="container1" id="container">
	<div className="form-container sign-up-container">
		<form className="fo1" action="#" onSubmit={handleSubmit}>
			<h1 className="h1">Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className="sp">or use your email for registration</span>
			<input className='inp1' name="name" id="name" autoComplete="off" pattern="[^0-9]*" title="Name cannot contain numerics" type="text" placeholder="Name" value={user.name} onChange={handleInputs} required/>
			<input className='inp1' name="email" id="email" autoComplete="off" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Lowercase Required with 2 letters after ." type="email" placeholder="Email" value={user.email} onChange={handleInputs} required/>
			<input className='inp1'  name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Requires a length of 8 and atleast One Lowercase, One Uppercase & One number." id="password" autoComplete="off" type="password" placeholder="Password" value={user.password} onChange={handleInputs} required/>
			<button className="page" style={{marginTop:16}}>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form className="fo1" action="#" onSubmit={proceedLogin}>
			<h1 className="h1">Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className="sp">or use your account</span>
			<input className='inp1' name="lemail" autoComplete="off" value={auth.lemail} onChange={handleLogin} type="email" placeholder="Email" required/>
			<input className='inp1' name="lpass" value={auth.lpass} onChange={handleLogin} type="password" placeholder="Password" required/>
			<a id="done" href="#"><u>Forgot your password</u> ?</a>
			<button className="page" style={{marginTop:16}}>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 className="h1">Welcome Back!</h1>
				<p className="p1">To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={set}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className="h1">Hello, Friend!</h1>
				<p className='p1'>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={set}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
</div>
  )
}

function set()
{
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
}
export default Login