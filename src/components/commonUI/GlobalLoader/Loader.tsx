/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
function AppLoader() {
        
  const [progress, setProgress] = useState(30);
  useEffect(()=>{
    setTimeout(()=>setProgress(90), 1000)
  })
  return (
    <>
      <LoadingBar
        color={"red"}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

    </>
  );
  
}
export default AppLoader;
