import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function YourInfo({ formData, setFormData }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");


  const handleNameInput = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const handleEmailInput = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handlePhoneInput = (e) => {
    setFormData({ ...formData, phone: e.target.value });
  };
    return (  
        <>
        <h1>Personal info</h1>
        <p>  Please provide your name, email address, and phone number.</p>
        <form onSubmit={(e)=>{
          e.preventDefault();
          if (formData.name.trim() === "") {
            setError("Name is required.");
          } else {
            setError("");
            navigate("/step2");
          }

          
        }}>
          <div>
          <label>
            Name:*
            <input type="text" name="name"   value={formData.name} onChange={handleNameInput}/>
            {error && <p className="required-erore" style={{ color: "red"  }}>{error}</p>}
          </label>
          <label>
            Email:*
            <input type="email" name="name" required  value={formData.email} onChange={handleEmailInput}/>
          </label>
          <label>
            Phone:*
            <input type="phone" name="name" required value={formData.phone} onChange={handlePhoneInput} />
          </label>
          </div>
          <div id="back-sub-sec">
          <input type="submit" value="Next Step" />
          </div>
        </form>
      </>
    );
}

