import React,{useState} from "react";
import BasicInfo from "../components/BasicInfo";
import ProjectInfo from "../components/ProjectInfo";



const Userdata = () => {
    const [componentList, setComponentList] = useState([]);

  // Function to add a component to the list
  const handlePlusClick = () => {
    // Create the component you want to add here
    const newComponent = <ProjectInfo />; // Replace YourComponent with your actual component
    setComponentList([...componentList, newComponent]);
  };

  // Function to remove the last component from the list
  const handleMinusClick = () => {
    if (componentList.length > 0) {
      const updatedList = componentList.slice(0, -1);
      setComponentList(updatedList);
    }
  };


    return <div>
        <BasicInfo/>
        <ProjectInfo/>
        <div>
            {componentList.map((component, index) => (
            <div key={index}>{component}</div>
            ))}
        </div>
        <div className=" flex justify-center gap-5">
        <button className=" bg-black text-white px-7 py-3 rounded-lg hover:bg-white hover:text-black" onClick={handlePlusClick}>More Projects</button>
        <button className=" bg-black text-white px-7 py-3 rounded-lg hover:bg-white hover:text-black" onClick={handleMinusClick}>Cancel</button>
        </div>
    </div>
}

export default Userdata