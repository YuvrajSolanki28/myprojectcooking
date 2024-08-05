import React from "react";

function Login() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="m-0 font-bold">Sign in</h1>
        <div className="social-container">
          <a href="/" className="social text-[#333] text-[14px] no-underline mx-[0] my-[15px]">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/" className="social text-[#333] text-[14px] no-underline mx-[0] my-[15px]">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="/" className="social text-[#333] text-[14px] no-underline mx-[0] my-[15px]">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span className="text-[12px]">or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a className="text-[#333] text-[14px] no-underline mx-[0] my-[15px]" href="/">Forgot your password?</a>
        <button className="rounded-[20px] border-[1px] border-[solid] border-[#ff4b2b] bg-[#ff4b2b] text-[#ffffff] text-[12px] font-bold px-11 py-3 tracking-[1px] uppercase [transition:transform_80ms_ease-in] active:scale-[0.95] focus:outline-[none]">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
