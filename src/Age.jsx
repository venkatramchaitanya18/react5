import   { useState } from "react";

const Age  = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    if (ageInMilliseconds<0){
        alert("Select Correct Date !")
        return;
    }
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    if (isNaN(ageInYears)){
        alert("Select Date !");
    }else{
    setAge(Math.floor(ageInYears));
    }
  };

  return (
    <div className="  p-4">
      <p className=" text-center text-lg font-base">Enter your date of birth:</p>
      <input className="block m-auto  w-60 my-4" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      <button className="block m-auto" onClick={calculateAge}>Calculate</button>
      {age && <p className="block my-4">Your age is {age} years.</p>}
    </div>
  );
};

export default Age ;
